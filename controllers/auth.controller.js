const Joi = require("joi");
const AuthModel = require("../models/auth.model");

// AUTH CONTROLLERS
const register = async (req, res, next) => {
  // Request data schema
  const authValidate = Joi.object({
    name: Joi.string().min(3).max(20).required().trim(),
    email: Joi.string().email().required().trim(),
    password: Joi.string().required(),
  });

  // Validate request data
  const { error, value } = authValidate.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "Invalid request data",
      error: error?.details[0].message,
    });
  }

  const { name, email, password } = req.body;

  // Check for duplicate user's
  const validateEmail = await AuthModel.findOne({ email: email });

  console.log("Validate Email :", validateEmail);

  if (validateEmail) {
    return res.status(400).json({ message: "User already exits" });
  }

  const newUser = new AuthModel(value);
  await newUser.save();

  return res.status(200).json({
    message: "Register data received",
    data: value,
  });
};

const login = async (req, res, next) => {};

module.exports = {
  register,
  login,
};
