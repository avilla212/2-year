const { username, hashedPassword } = require("../config/authConfig");

// Function to securely hash input for login verification
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

// Function to handle user login
async function loginUser(req, res) {
    const { inputUsername, inputPassword } = req.body;

    // Check if username matches the predefined username
    if (inputUsername !== username) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // Hash the entered password and compare with stored hash
    const hashedInputPassword = await hashPassword(inputPassword);

    if (hashedInputPassword === hashedPassword) {
        res.json({ message: "Login successful!" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
}

module.exports = { loginUser };
