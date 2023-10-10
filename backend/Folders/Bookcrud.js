const Book = require("../Bookschema");



const Createbook=async(req,res)=>{
    const {BookName,
    PublicationName,
    AuthorName,
    Availability,
    Price,
    Year}=req.body;
const Bookdetails=await Book.create({BookName,
        PublicationName,
        AuthorName,
        Availability,
        Price,
        Year })
    res.json(Bookdetails)
}


const getAllbooks=async (req,res)=>{
    const details=await Book.find()
    res.json(details)
}


const Getbook=async (req,res)=>{
    const getid=req.params.id;
    const bookdetails=await Book.findById({_id:getid})
    res.json(bookdetails)
}

// const filterbyname= async (req,res)=>{
//     const bookname= req.params.name
//     const data= await Book.filter(x => x.BookName ==bookname)
   
//     res.json(data)
    
  
//         } 
const filterbyname= async (req,res)=>{
    const bookname= req.params.name
    const data= await Book.findOne({ BookName: bookname }, 'Price')
   
    res.json(data.Price)
    
  
        } 
        

const Bookupdate=async (req,res)=>{
    const {BookName,
        PublicationName,
        AuthorName,
        Availability,
        Price,
        Year}=req.body;
     const _id=req.params.id;
     const Bookupdated=await Book.findByIdAndUpdate(_id,{BookName,
        PublicationName,
        AuthorName,
        Availability,
        Price,
        Year})
     res.json(Bookupdated)
}
const Deletebook=async (req,res)=>{
    const _id=req.params.id;
    const bookid=await Book.findByIdAndRemove(_id)
    res.json("Book deleted")
}

const getAllbooksname=async (req,res)=>{
    const details=await Book.find({Availability:true}, 'BookName')
    res.json(details)
}

module.exports= {Createbook,Bookupdate,Getbook,Deletebook,getAllbooks,filterbyname,getAllbooksname}
