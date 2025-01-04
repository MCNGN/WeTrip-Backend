// Import required modules
const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();
const routes = require("./routes")

// Initialize app
const app = express();

// Middleware
app.use(express.json());

// Define port
const port = process.env.PORT || 4000;

// Test route
app.use("/", routes);

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});