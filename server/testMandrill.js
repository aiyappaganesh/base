var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('');
var template_name = "Welcome";
var template_content = [{
        "name": "Welcome Template Name",
        "content": "Welcome Content"
    }];
var message = {
    "from_email": "",
    "from_name": "",
    "subject": "Welcome",
    "to": [{
            "email": "",
            "name": "",
            "type": "to"
        }],
    "merge_vars": [{
            "rcpt": "",
            "vars": [{
                    "name": "REFLINK",
                    "content": ""
                },
                {
                    "name": "ACCESSLINK",
                    "content": ""
                }]
        }],
};
mandrill_client.messages.sendTemplate({"template_name": template_name, "template_content": template_content, "message": message}, function(result) {
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
