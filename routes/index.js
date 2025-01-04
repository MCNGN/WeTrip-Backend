const express = require("express");
const router = express.Router();
const { getData, signIn } = require("../controllers/index");

// Define routes
router.get("/data", getData);
router.post("/signin", signIn);

module.exports = router;