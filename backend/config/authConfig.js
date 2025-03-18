require("dotenv").config(); 

// Config for a single predfined user 
module.exports = {
    correctUser: process.env.CORRECT_USER,
    correctPassword: process.env.CORRECT_PASSWORD
}