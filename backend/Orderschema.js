const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    BookName:{type:String},
    FirstName:{type:String},
   Quantity:{type:Number},
    Unitprice:{type:Number},
    TotalAmount:{type:Number},
    
});

const Order =mongoose.model("Order",orderSchema)

module.exports=Order;