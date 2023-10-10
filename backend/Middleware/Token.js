const jwt = require("jsonwebtoken");

const protect=async (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
       try{
        token=req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.JWT_KEY)
        next();
       } 
       catch(error){
        res.status(401).send("No Token");
        throw new Error("Not authorixed token")
       }
    }
    if(!token){
        res.status(401).send("Token not exist");
        throw new Error("Not authorixed token") 
    }
}
module.exports=protect