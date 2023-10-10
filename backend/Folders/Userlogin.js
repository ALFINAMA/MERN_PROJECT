
const bcrypt=require('bcrypt');

const jwt = require("jsonwebtoken");
const Book_user = require('../Userschema');



const login_USER=async(req,res)=>{
    const {Email,Password}=req.body;
   
    const userdata=await Book_user.findOne({Email})

    if(userdata && (await bcrypt.compare(Password,userdata.Password))){
        
       
        res.json({message:"success",Token:tokengenerate(userdata._id),id:userdata._id})
        
    }
    else{
        res.json("Failed ")
        
    }
  
    
}
const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_KEY,{expiresIn:"1d"});
}


module.exports=login_USER