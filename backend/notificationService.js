
function sendInAppNotification(user) {
    console.log(`Sending notification to ${user.name}`);
  }
  
  function sendEmailNotification(email, subject, message) {
    console.log(`Sending email to ${email}`);
  }
  
  module.exports = { sendInAppNotification, sendEmailNotification };
  