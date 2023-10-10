
const bcrypt=require('bcrypt');
const Admin = require('../Adminschema');
const jwt = require("jsonwebtoken");



const login=async(req,res)=>{
    const {Email,Password}=req.body;
   
    const userdata=await Admin.findOne({Email})

    if(userdata && (await bcrypt.compare(Password,userdata.Password))){
        res.json({message:"success",Token:tokengenerate(userdata._id)})
    }
    else{
        res.json("Failed ")
        
    }
  
    
}
const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_KEY,{expiresIn:"1d"});
}


module.exports=login