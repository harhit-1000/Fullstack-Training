export const roleAuth = (allowedRoles)=>{
  return (req,res,next) =>
  {
    try {
    if(!allowedRoles.includes(req.user.role))
    return res.status(400).json({error:"Not Authorize"});
    next();

  } catch (error) {
    res.status(500).json({error:"Role Authentication Failed"});
  }
  }
}

