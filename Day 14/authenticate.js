const authenticate = (req,res,next)=>{
  const {email,password} = req.params

  if(email == "harshit" && password =="1234")
  {
    req.params.email = "harshit@valid"
    next();
  }
  else
  res.status(200).json({message :"invalid credentials"});
} 

export default authenticate;