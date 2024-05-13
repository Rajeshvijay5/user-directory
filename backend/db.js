const mongoose = require("mongoose");
const { mongoDBURL } = require("./config");


mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB database');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB database', error);
    });

    
const userSchema = mongoose.Schema({
    Name:String,
    Age:Number,
    Gender:String,
    City:String,
    State:String

})

const user = mongoose.model('usertable',userSchema);

module.exports={
    user
}