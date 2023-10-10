const cart = require("../Cartmodel");

const Createcart=async(req,res)=>{
    const {userid,BookName,
    
    Price,
    Quantity,
    }=req.body;
const cartdetails=await cart.create({userid,BookName,
      
        Price,
        Quantity })
    res.json(cartdetails)
}
const Createcart1=async(req,res)=>{
    const userid=req.params.id;
    const {BookName,
    
    Price,
    Quantity
    }=req.body;
const cartdetails=await cart.create({userid,BookName,
      
        Price,
        Quantity })
    res.json(cartdetails)
}
const getAllitemscart=async (req,res)=>{
    
    const details=await cart.find()
    res.json(details)
}

const getAllitemscart1=async (req,res)=>{
    const user_id=req.params.id;
    const details=await cart.find({userid:user_id})
    res.json(details)
}
const increment=async (req,res)=>{
    const {BookName,
   
        Price,
        Quantity}=req.body;
     const _id=req.params.id;
     const Bookupdated=await cart.findByIdAndUpdate(_id,{BookName,
   
        Price,
        Quantity})
     res.json(Bookupdated)
}




const Deletebookcart=async (req,res)=>{
    const _id=req.params.id;
    const bookid=await cart.findByIdAndRemove(_id)
    res.json("Book deleted")
}
const DeleteAll=async (req,res)=>{
    
    await cart.deleteMany({})
    res.json("deleted")
    
}

module.exports={Createcart,getAllitemscart,Deletebookcart,increment,DeleteAll,Createcart1,getAllitemscart1}