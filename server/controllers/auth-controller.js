const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("Hey");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "Email Already Exists" });
    }
    const newUser = await User.create({ username, email, phone, password });
    res.status(201).json({
      msg: "User Has Been Registered Successfully",
      token: await newUser.generateToken(),
      userId: newUser._id.toString(),
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields Are Required",
      });
    }
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({
        success: false,
        message: "Email Doesn't Exist, Please Register First",
      });
    }

    const isMatch = await userExist.comparePassword(password);
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = await userExist.generateToken();
    res.status(200).json({
      success: true,
      message: "Login Successfully",
      token: token,
      userId: userExist._id.toString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
    console.log(error);
  }
};

// to send user data- user logic
const user = async (req, res) => {
  try {
    const userData = await req.user;
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register, login, user };
