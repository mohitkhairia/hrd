
const express = require('express');
const cron = require('node-cron');
const { sendInAppNotification, sendEmailNotification } = require('./notificationService');
const connect = require('./db/connectDatabase');
const app = express();
const PORT = process.env.PORT || 5000;
const User = require('./db/user.model');
const userRouter = require('./routes/user.routes');
const bodyParser = require('body-parser');
const cors = require('cors'); 


cron.schedule('0 0 * * *', async () => {

  const inactiveUsers = await User.find({ lastActivity: { $lt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) } });
  inactiveUsers.forEach(user => {
    sendInAppNotification(user);
    sendEmailNotification(user.email, "Reminder: Inactivity Detected", "Please login to our app to continue using our services.");
  });


  const abandonedUsers = await User.find({ courseAbandoned: true });
  abandonedUsers.forEach(user => {
    sendInAppNotification(user);
    sendEmailNotification(user.email, "Reminder: Pending Purchase", "You have items in your cart. Complete your purchase now!");
  });
});


app.use(bodyParser.json());
app.use(cors());
app.use('/api/users', userRouter);


connect().then(()=>{
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
})
