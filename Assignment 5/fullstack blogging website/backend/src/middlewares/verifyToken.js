import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
try {
    const { authHeader } = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer "));
  return res.status(404).json("no token provided");

  const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(404).json({ error: "Invalid token" });
      req.user = decoded;
      next();
    }
  });
} catch (error) {
       return res.status(500).json({ message: "Authentication error", error: error.message });
}
};
