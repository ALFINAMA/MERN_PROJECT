const Client = require("../Clientschema");

const Createclient=async(req,res)=>{
    const { FirstName,
    LastName,
    Email,
     PhoneNumber,
     Address}=req.body;
const clientdetails=await Client.create({ FirstName,
    LastName,
    Email,
     PhoneNumber,
     Address})
    res.json(clientdetails)
}

const getAllclients=async (req,res)=>{
    const details=await Client.find()
    res.json(details)
}

const Getclient=async (req,res)=>{
    const getid=req.params.id;
    const clientdetails=await Client.findById({_id:getid})
    res.json(clientdetails)
}

const filterbyclientname= async (req,res)=>{
    const firstname= req.params.name
    const data= await Client.filter(x => x.BookName==firstname)
   
    res.json(data)
    
  
        } 

const Clientupdate=async (req,res)=>{
    const { FirstName,
        LastName,
        Email,
         PhoneNumber,
         Address}=req.body;
     const _id=req.params.id;
     const Clientupdated=await Client.findByIdAndUpdate(_id,{ FirstName,
        LastName,
        Email,
         PhoneNumber,
         Address})
     res.json(Clientupdated)
}
const Deleteclient=async (req,res)=>{
    const _id=req.params.id;
    const clientid=await Client.findByIdAndRemove(_id)
    res.json("Book deleted")
}
const getAllCLIENTsname=async (req,res)=>{
    const details=await Client.find({}, 'FirstName')
    res.json(details)
}

module.exports={Createclient,getAllclients,Deleteclient,Getclient,filterbyclientname,Clientupdate,getAllCLIENTsname}