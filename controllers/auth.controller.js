const Joi = require("joi");
// AUTH CONTROLLERS
const register = async (req, res, next) => {
  const authValidate = Joi.object({
    name: Joi.string().min(3).max(20).required().trim(),
    email: Joi.string().email().required().trim(),
    password: Joi.string().required(),
  });

  const { error, value } = authValidate.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "Invalid request data",
      error: error?.details[0].message,
    });
  }

  console.log("Joi Validation :", value);

  return res.status(200).json({
    message: "Register data received",
    data: {
      name: value.name,
      email: value.email,
      password: value.email,
    },
  });
};

const login = async (req, res, next) => {};

module.exports = {
  register,
  login,
};
