const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No User Found" });
    }
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({});
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contact Found" });
    }
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const deletedUser = await User.deleteOne({ _id: userId });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = await User.findOne({ _id: userId }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updateUserDetailById = async(req,res)=>{
  try {
    const id = req.params.id
    const data = req.body
    const updateUser = await User.updateOne({_id:id},{
      $set: data
    })
    return res.status(200).json(updateUser)
  } catch (error) {
    next(error)
  }
}

const deleteContactById = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const deletedUser = await Contact.deleteOne({ _id: userId });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  updateUserById,
  updateUserDetailById,
  deleteContactById 
};
