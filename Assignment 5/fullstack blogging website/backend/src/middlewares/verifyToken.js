import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer "))
      return res.status(401).json("no token provided");

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Authentication error", error: "Invalid token" });
  }
};

export default verifyToken;