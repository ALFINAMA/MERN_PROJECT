const mongoose=require('mongoose')

const connection=async()=>{
    try{
        const connect=await mongoose.connect("mongodb+srv://alfina23ama:Alfina123@alfina.5l7gqsw.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser:true,
            useUnifiedTopology : true
        })
        console.log("Database is running ")
    }
    catch(err){
        console.log(`error:${err}`)
        process.exit()
    }
}
module.exports=connection