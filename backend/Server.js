const express=require("express")
const cors=require("cors")
const router=require("./Routes/Routers");
const connection = require("./Config/Mongo");
const dotenv=require("dotenv")

connection()
const app  =express();
app.use(cors())
app.use(express.json())

app.use("/",router)

dotenv.config()
const port=process.env.port || 3000;

app.listen(3000,()=>console.log(`server running on ${port}`))