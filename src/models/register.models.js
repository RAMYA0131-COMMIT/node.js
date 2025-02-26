const mongoose = require("mongoose");
const {v4} = require('uuid');

const registerSchema = new mongoose.Schema({
    _id:{
       type:String,
       default:v4
    },
    userName:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        trim:true
    },
    age:{
        type:Number,
        require:true
    },
    userType:{
        type:String,
        default:"Test"
    },
    role:{
        type:String,
        enum:["teacher","student","parent"]
    },
    password:{
        type:String,
        require:true
    },
    mobileNo:{
        type:Number
    },
    userId:{
        type:String,
        default:v4
}

},{timestamps:true});

const register =mongoose.model("register",registerSchema)

module.exports =register;