const mongoose=require('mongoose')

const Book_userSchema=mongoose.Schema({
    FirstName:{type:String},
    SecondName:{type:String},
    ThirdName:{type:String},
    Email:{type:String},
    Password:{type:String   },
   
});

const Book_user =mongoose.model("Book_user",Book_userSchema)

module.exports=Book_user;