const controll = (req,res) =>
{
  const email = req.params.email;
  res.json({message:"welcome to our website"});
}

export default controll;