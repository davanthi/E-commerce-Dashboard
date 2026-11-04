const express=require("express");
const userRouter=express.Router();
const User=require("../models/user.model.js");
const bcrypt = require("bcryptjs");
userRouter.post("/register",async(req,res)=>{
 try{
  const userExists=await User.findOne({email:req.body.email});
 if(userExists){
  return res.status(400).json({
   success:false,
   message:"User already exists"
  })
 }
 const salt = await bcrypt.genSalt(10);
 const hashPassword = bcrypt.hashSync(req.body.password, salt);
 req.body.password = hashPassword;
const newUser=new User(req.body);
await newUser.save();
return res.status(201).json({
 success:true,
 message:"User registered successfully",
 user:newUser
})

 }catch(error)
 {
  return res.status(500).json({
   success:false,
   message:"Internal server error"
  })
 }
 
})
userRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.send({
        success: false,
        message: "User not found please Register",
      });
    }
    validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.send({
        success: false,
        message: "Incorrect password please enter correct password.",
      });
    }
    return res.send({
      success: true,
      message: "Logged in successfully.",
      user: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
});
module.exports=userRouter;