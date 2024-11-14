const register = require("../models/register.models");
const passwordGenerator = require("../utils/generatePassword")
const mailSend = require("../utils/sendEmail")
const bcrypt = require("bcrypt");
const { generateToken} = require("../middlewares/auth Token");

const userRegister = async(req,res)=>{
    try{
        let{email,userName}=req.body;
        const checkEmail = await register.findOne({email});
        if(checkEmail){
            return res.status(409).json({Message:"Email Already Exists.."})
        }
       let password = passwordGenerator(8);
       let hashPassword = await bcrypt.hash(password,10);   
       let data={
            ...req.body,
            password:hashPassword,
            created:"success"
        }
    const createuser = await register.create (data);
    await mailSend(email,userName,password);
    res.json({
        createuser,
        message:"user created"
    });
    }catch(err){
      res.json({
        Error:err
      })
    }
};

const login=async (req,res)=>{
    try{
     let {email,password} = req.body;
      const checkEmail = await register.findOne({email});
      if(!checkEmail) return res.status(404).json({message:"Invalid Email.."});
       const checkPassword = await bcrypt.compare(password,checkEmail.password);
       if(!checkPassword) return res.status(404).json({message:"Invalid Password.."});
       let token = generateToken(checkEmail.userId);
        // console.log("test",token);
        

       res.json({checkEmail,token,message:"login sucessfull.."})
      
    }catch(Error){
        res.json({Error})
    }
}

module.exports={
    userRegister,
    login
}