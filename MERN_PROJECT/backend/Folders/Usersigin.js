const bcrypt=require('bcrypt');

const jwt = require("jsonwebtoken");
const Book_user = require('../Userschema');


const signup_USER=async(req,res)=>{
    const {FirstName,
    SecondName,
    ThirdName,
    Email,
    Password
    }=req.body;
 
    const userdata=await Book_user.findOne({Email})

    if(userdata && (bcrypt.compare(Password,userdata.Password))){
        res.json("Already exist!")
    }
    else{
       
        const salt=await bcrypt.genSalt(10)
        const hashedpasrd=await bcrypt.hash(Password,salt)
        const Userdetail=await Book_user.create({
            FirstName,
            SecondName,
            ThirdName,
            Email,
            Password:hashedpasrd
        })
        res.json(Userdetail)
    }
    
}
const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_KEY,{expiresIn:"1d"});
}


module.exports=signup_USER