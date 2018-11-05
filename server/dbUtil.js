const Promise = require('bluebird')
const { executeQuery } = require('./sqlConnection')

function insertOrUpdate(insert, update, results, obj, row) {
  const { success, updates, errors } = results
  return new Promise((resolve, rej) => {
    if (!insert.query && insert.error) {
      const val = {
        error: insert.error,
        row,
      }
      resolve(errors.push(val))
    } else {
      executeQuery(insert.query, insert.params)
      .then(res => resolve(success.push(obj)))
      .catch(err => {
        if (err.code == 'ER_DUP_ENTRY') {
          executeQuery(update.query, update.params)
          .then(res => resolve(updates.push(obj)))
          .catch(err => {
            const val = {
              error: err.sqlMessage,
              row,
            }
            resolve(errors.push(val))
          })
        } else {
          const val = {
            error: err.sqlMessage,
            row,
          }
          resolve(errors.push(val))
        }
      })
    }
  })
}

module.exports = {
    insertOrUpdate
}
