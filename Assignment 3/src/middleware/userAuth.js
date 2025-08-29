import JsonWebToken  from "jsonwebtoken";
const jwt=JsonWebToken;

const studentVerifyToken = (req,res,next) =>{
  const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ message: "No token provided!" });
  }

const token = req.headers["authorization"]?.split(" ")[1]; 

try{
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
  next();
}catch(err){
  return res.status(401).json({message: "Unauthorized!"} );
}


}
const adminVerifyToken = (req,res,next) =>{
  const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ message: "No token provided!" });
  }

const token = req.headers["authorization"]?.split(" ")[1]; 

try{
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if(decoded.role!=="admin")
  return res.status(401).json({message: "Unauthorized! Admin only"} );
  req.user = decoded;
  next();
}catch(err){
  return res.status(401).json({message: "Unauthorized!"} );
}


}

export { studentVerifyToken, adminVerifyToken};