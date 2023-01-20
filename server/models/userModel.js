const mongoose = require("mongoose")

const userModel = mongoose.Schema({
    email:{
        type:String,
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
})

module.exports = mongoose.model("userModel",userModel)