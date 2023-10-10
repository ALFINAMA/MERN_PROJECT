const mongoose=require('mongoose')

const bookSchema=mongoose.Schema({
    BookName:{type:String},
    PublicationName:{type:String},
    AuthorName:{type:String},
    Availability:{type:Boolean},
    Price:{type:Number},
    Year:{type:Number},
    
});

const Book =mongoose.model("Book",bookSchema)

module.exports=Book;