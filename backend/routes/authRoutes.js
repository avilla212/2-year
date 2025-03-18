// API endpoint 
const express = require("express");
const { loginUser } = require("../controllers/authController");

// Router is used to create the API endpoint
const route = express.Router();

route.post("/login", loginUser);

// Export the router to be used in server.js
module.exports = route;