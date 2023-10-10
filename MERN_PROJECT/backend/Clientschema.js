const mongoose=require('mongoose')

const clientSchema=mongoose.Schema({
   FirstName:{type:String},
   LastName:{type:String},
   Email:{type:String},
    PhoneNumber:{type:Number},
    Address:{type:String},
    
});

const Client =mongoose.model("Client",clientSchema)

module.exports=Client;