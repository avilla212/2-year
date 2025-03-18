const express = require("express");
const path = require("path");
const authRoutes = require("./routes/authRoutes"); // Import auth routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Allows JSON parsing in requests

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// API Routes for authentication
app.use("/api/auth", authRoutes);

// Serve the login page at the root URL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Start the server
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
