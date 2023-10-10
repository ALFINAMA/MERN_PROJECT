const mongoose=require('mongoose')

const cartSchema=mongoose.Schema({
    userid:{type:String},
    BookName:{type:String},
    Price:{type:Number},
    Quantity:{type:Number},
    
});

const cart =mongoose.model("Book_cart",cartSchema)

module.exports=cart;