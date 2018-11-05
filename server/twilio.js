// Sending an SMS using the Twilio API
// Twilio Credentials
const accountSid = '';
const authToken = '';
// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

// The current 'from' twilio number is +14156504848
function sendFromTwilio(toPhone, messageText, mediaUrl=null) {
	console.log(toPhone, messageText)
	if (!toPhone) {
		return Promise.resolve('')
	}
    return client.messages
    .create({
        to: toPhone,
        from: process.env.TWILIO_NUMBER,
        body: messageText
    })
    .then((message) => console.log(message.sid, message.errorMessage))
}

module.exports = {
    sendFromTwilio
}