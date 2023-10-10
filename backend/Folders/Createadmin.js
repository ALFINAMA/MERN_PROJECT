
const bcrypt=require('bcrypt');
const Admin = require('../Adminschema');

const createadmin=async(req,res)=>{
    const { FirstName,
    SecondName,
    ThirdName,
    Email,
    Password,
    Role}=req.body;
    const salt=await bcrypt.genSalt(10)
    const hashedpasrd=await bcrypt.hash(Password,salt)
    const Admindetails=await Admin.create({
        FirstName,
    SecondName,
    ThirdName,
    Email,
    Password:hashedpasrd,
    Role
     })
    res.json(Admindetails)

   
   
}
module.exports =createadmin