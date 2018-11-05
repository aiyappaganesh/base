const mysql = require('mysql')

var sqlConfig = {
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
};

if (process.env.INSTANCE_CONNECTION_NAME) {
    sqlConfig.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
}

// Connect to the database
const sqlConnection = mysql.createConnection(sqlConfig)

function executeQuery(query, params) {
    return new Promise((resolve, reject) => {
        sqlConnection.query(query, params,
        (error, results, fields) => {
            if(error) {
                // console.log(error)
                reject(error)
            } else {
                if(results) {
                    resolve(results)
                }
                else {
                    reject('Error executing query')
                }
            }
        })
    })
}

module.exports = {
    sqlConnection,
    executeQuery
}
