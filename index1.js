const express = require("express");
const mongoose = require("mongoose"); 
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://ramya:Ramya130131@cluster0.wak0t.mongodb.net/server1?retryWrites=true&w=majority&appName=Cluster0")
    
.then(() => {
        console.log("MongoDb Connected");
    })
    .catch((error) => {
        console.log(`Connection error: ${error.message}`);
    });

const registerSchema = new mongoose.Schema({
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
    }
},{timestamps:true});

const register =mongoose.model("register",registerSchema)


app.post("/register",async(req,res)=>{
    try{
    let createuser = await register.create (req.body);
    res.json({
        createuser,
        message:"user created"
    });
    }catch(err){
      res.json({
        Error:err
      })
    }
})

    let data = {
        userName: "test user",
        age: 24,
        mobileNo: 1234567890
    };
    
app.get("/userdata", (req, res) => {
    res.json(data);
});

app.post("/createuser", (req, res) => {
    let newData = {
        ...req.body,
        email: "test@gmail.com"
    };
    res.json({
        newData,
        message: "User created"
    });
});

app.use("/", (req, res) => {
    res.send("Server is alive");
});

const port = 8000;
app.listen(port, () => {
    console.log("Server is running on:", port);
});
