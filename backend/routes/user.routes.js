const express = require('express');
const userRouter = express.Router();
const User = require('../db/user.model');




userRouter.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

userRouter.post('/', async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new User({
          name,
          email,
          lastActivity: new Date(), 
          courseAbandoned: false,  
        });
        await newUser.save();
        res.status(201).json(newUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }

})
module.exports = userRouter