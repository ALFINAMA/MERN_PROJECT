
const Client = require("../Clientschema");
const Order = require("../Orderschema");

const Createorders=async(req,res)=>{
    const { BookName,
    FirstName,
   Quantity,
    Unitprice,
    TotalAmount}=req.body;
const orderdetails=await Order.create({BookName,
    FirstName,
   Quantity,
    Unitprice,
    TotalAmount})
    res.json(orderdetails)
}

const getAllorders=async (req,res)=>{
    const details=await Order.find()
    res.json(details)
}

const Getorders=async (req,res)=>{
    const getid=req.params.id;
    const orderdetails=await Order.findById({_id:getid})
    res.json(orderdetails)
}

 

const Orderupdate=async (req,res)=>{
    const { BookName,
    FirstName,
    
       Quantity,
        Unitprice,
        TotalAmount}=req.body;
     const _id=req.params.id;
     const Orderupdated=await Order.findByIdAndUpdate(_id,{ BookName,
    FirstName,
       Quantity,
        Unitprice,
        TotalAmount})
     res.json(Orderupdated)
}
const DeleteOrder=async (req,res)=>{
    const _id=req.params.id;
    const Orderid=await Order.findByIdAndRemove(_id)
    res.json("Book deleted")
}



module.exports={Createorders,getAllorders,Getorders,Orderupdate,DeleteOrder}