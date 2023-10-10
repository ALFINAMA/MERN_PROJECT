const mongoose=require('mongoose')

const adminSchema=mongoose.Schema({
    FirstName:{type:String},
    SecondName:{type:String},
    ThirdName:{type:String},
    Email:{type:String},
    Password:{type:String   },
    Role:{type:String},
});

const Admin =mongoose.model("Admin",adminSchema)

module.exports=Admin;