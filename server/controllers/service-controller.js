const Service = require("../models/service-model");

const services = async (req, res) => {
  try {
    const data = await Service.find({});
    if (!data) {
      return res.status(404).json({ message: "No Service Found" });
    }
    res.status(200).json({ message: data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = services;
