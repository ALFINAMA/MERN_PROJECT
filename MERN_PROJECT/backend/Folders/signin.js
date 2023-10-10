const bcrypt=require('bcrypt');
const Admin = require('../Adminschema');
const jwt = require("jsonwebtoken");


const signup=async(req,res)=>{
    const {FirstName,
    SecondName,
    ThirdName,
    Email,
    Password,
    Role}=req.body;
   
    const userdata=await Admin.findOne({Email})

    if(userdata && (bcrypt.compare(Password,userdata.Password))){
        res.json("Already exist!")
    }
    else{
       
        const salt=await bcrypt.genSalt(10)
        const hashedpasrd=await bcrypt.hash(Password,salt)
        const Userdetail=await User.create({
            Name,Email,Password:hashedpasrd
        })
        res.json(Userdetail,{Token:tokengenerate(Userdetail._id)})
    }
    const tokengenerate=(id)=>{
        return jwt.sign({id},process.env.JWT_KEY,{expiresIn:"1d"});
    }
}


module.exports=signup