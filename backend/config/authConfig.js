require("dotenv").config({ path: __dirname + "/../.env" }); // Load .env with explicit path

console.log("🔹 DEBUG: Checking .env file...");
console.log("🔹 Correct user:", process.env.USERNAME || "NOT LOADED");
console.log("🔹 Correct password:", process.env.HASHED_PASSWORD || "NOT LOADED");

module.exports = {
    username: process.env.USERNAME || "Kate",
    hashedPassword: process.env.HASHED_PASSWORD || null
};
