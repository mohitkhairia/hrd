const mongoose = require('mongoose');

async function connect(){
    try{
        const conn = await mongoose.connect('mongodb://localhost:27017/userDB',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected")
    }
   catch(err){
    console.error("Could not connect to the database")
   }
}

module.exports= connect;
