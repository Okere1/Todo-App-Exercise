const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("DB Failed to Connect:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
