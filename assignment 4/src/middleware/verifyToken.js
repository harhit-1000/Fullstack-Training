import JsonWebToken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({path:"../../.env"});


 const verifyToken =  (req, res, next)=>{
 try {
    let authHeader= req.headers.authorization;
    const bool = !authHeader || !authHeader.startsWith("Bearer ");
   if(!authHeader || !authHeader.startsWith("Bearer "))
    {return res.status(403).json({error:"No Token provided"});}
   const token = authHeader.split(" ")[1];
  const decode = JsonWebToken.verify(token,process.env.JWT_SECRET_KEY);
  if(!decode)
    {return res.status(400).json({error:"Invalid token"});}
  req.user=decode;
  next();
 } catch (error) {
  res.status(500).json({error:"Verification Failed"});
 }
}

export default verifyToken;