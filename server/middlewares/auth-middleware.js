const JWT = require("jsonwebtoken");
const User = require("../models/user-model");

const autthMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Unathorized User, No Token" });
  }

  const jwtToken = token.replace("Bearer ", "").trim();
  console.log("jwt", jwtToken);
  try {
    const isVerified = JWT.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    req.user = userData;
    req.token = token;
    req.userId = userData._id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized, Invalid Token" });
  }
};

module.exports = autthMiddleware;
