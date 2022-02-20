const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const colors = require("colors");

const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
