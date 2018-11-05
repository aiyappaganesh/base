const SparkPost = require('sparkpost')
const key = ''

const client = new SparkPost(key)

function sendFromSpark(template_id, recipients) {
  console.log('Sending', template_id, 'to', recipients)
  client.transmissions.send({
    options: {
    },
    content: {
      template_id,
    },
    recipients,
    })
    .then(data => {
      console.log('Woohoo! You just sent your first mailing!')
      console.log(data)
    })
    .catch(err => {
      console.log('Whoops! Something went wrong')
      console.log(err)
    }
  )
}

module.exports = {
  sendFromSpark
}