const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
