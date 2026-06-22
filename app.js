require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db.config");
const requestLogger = require("./middlewares/requestLogger");
const authRoutes = require("./routes/auth.routes");
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

// Setup Cors
app.use(
  cors({
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  }),
);
// Logger Middleware
app.use(requestLogger);
// Connect to DB
connectDB();
app.use("/api/v1", authRoutes);

app.get("/", (req, res, next) => {
  return res.status(200).json({ message: "Welcome to the todo app" });
});

app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});
