const express = require("express");
const router = express.Router();
const { getData } = require("../controllers/index");

// Define routes
router.get("/data", getData);

module.exports = router;