console.log("scripts.js loaded");

document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        // Send login request to backend
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ inputUsername: username, inputPassword: password })
        });

        const data = await response.json();

        if (response.ok) {
            // Store session and redirect to homepage
            sessionStorage.setItem("authenticated", "true");
            window.location.href = "homepage.html";
        } else {
            showError(data.message);
        }
    } catch (error) {
        showError("Server error. Try again later.");
    }
});

// Function to show error messages
function showError(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
}
