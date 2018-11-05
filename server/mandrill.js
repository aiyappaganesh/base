var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(process.env.MANDRILL_KEY);

function sendEmail(templateName, subject, from, to, mergeVars) {
  var template_name = templateName
  var template_content = [{
          "name": "Template Name",
          "content": "Template Content"
      }]
  var message = {
      subject,
      "from_email": from.email,
      "from_name": from.name,
      "to": [{
              "email": to.email,
              "name": to.name,
              "type": "to"
          }],
      "merge_vars": [{
              "rcpt": to.email,
              "vars": mergeVars
          }],
  };
  var async = false;
  console.log('message', message)
  mandrill_client.messages.sendTemplate({"template_name": template_name, "template_content": template_content, "message": message, "async": async,}, function(result) {
      console.log(result);
      /*
      [{
              "email": "recipient.email@example.com",
              "status": "sent",
              "reject_reason": "hard-bounce",
              "_id": "abc123abc123abc123abc123abc123"
          }]
      */
  }, function(e) {
      // Mandrill returns the error as an object with name and message keys
      console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
      // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
  });
}

module.exports = {
  sendEmail
}