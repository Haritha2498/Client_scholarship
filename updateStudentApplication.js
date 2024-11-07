const { clientApplication } = require('./client');

let userClient = new clientApplication();
userClient.submitTxn(
    "university",
    "mychannel",
    "scholarship",
    "ScholarshipContract",
    "invokeTxn",
    "",
    "updateStudentApplicationStatus",
    "1234",
    "001"
    
).then(result => {
    console.log(new TextDecoder().decode(result))
    console.log("Student Application Updated")
})