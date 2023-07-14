function addEmailText() {

    var userName = document.getElementById("userNameField").value;
    var coordinatorRole = document.getElementById("coordinatorRole").value;
    var coordinatorName = document.getElementById("coordinatorName").value;
    var coordinatorEmail = document.getElementById("coordinatorEmail").value;
    var caseNumber = document.getElementById("caseNumber").value;
    var agentFirstName = document.getElementById("agentFirstName").value;
    var agentLastInitial = document.getElementById("agentLastInitial").value;
    var isVerified = fieldVerification(userName, coordinatorRole, coordinatorName, coordinatorEmail, caseNumber, agentFirstName, agentLastInitial);
    if (isVerified) {
        var emailText = "Hello " + userName + ",\n\n" +
            "Thank you for contacting Texas Testing Support. We have been unable to locate a TIDE account associated with either the name or email address provided. Please contact your " + coordinatorRole + " " + coordinatorName + " at " + coordinatorEmail + ", for assistance with creating a TIDE account.\n\n" +
            "Once your account has been created, you will receive an email containing two secure links. If this email does not appear in your inbox, you may need to check your junk mail or spam folders for a message from the DoNotReply@cambiumassessment.com email address. You may also want to work with your school/district technical contact to add this address to your safe senders list.\n\n" +
            "Click the first link, follow the on-screen prompts and requirements to create a new password, and click Submit when finished.\n\n" +
            "Please note, the secure link is only active for 15 minutes. If you miss the 15-minute window to reset your password, you can click on the second link in the email to request a new link.\n\n" +
            "If you have any further questions you can reply directly to this email, or call us at the number listed below and reference case# " + caseNumber + " .\n\n" +
            "Thank you,\n" +
            agentFirstName + " " + agentLastInitial + ".\n" +
            "Texas Testing Support\n" +
            "Phone: 833-601-8821\n" +
            "Email: TexasTestingSupport@cambiumassessment.com\n" +
            "https://TexasAssessment.gov";
        var textField = document.getElementById("emailTextField");
        textField.value = emailText;
        return false;
    }
    else {
        alert("Please make sure all fields have been filled out.");
        return false;
    }
}

function fieldVerification(userName, coordinatorRole, coordinatorName, coordinatorEmail, caseNumber, agentFirstName, agentLastInitial) {
    if (
        userName.trim() === "" ||
        coordinatorRole.trim() === "" ||
        coordinatorName.trim() === "" ||
        coordinatorEmail.trim() === "" ||
        caseNumber.trim() === "" ||
        agentFirstName.trim() === "" ||
        agentLastInitial.trim() === ""
    ) {
        return false;
    }
    return true;
}
function copyEmailText() {
    var textField = document.getElementById("emailTextField");
    if (textField.value) {
        textField.select();
        document.execCommand("copy");
        alert("Email Text Copied!");
    }
    else {
        alert("No Email to copy.");
    }
}