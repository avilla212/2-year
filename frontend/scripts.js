console.log("scripts.js loaded");

// document.getElementById("login-form").addEventListener("submit", async function(event) {
//     event.preventDefault(); // Prevents the form from refreshing the page

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     try {
//         // Send login request to backend
//         const response = await fetch("/api/auth/login", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ inputUsername: username, inputPassword: password })
//         });

//         const data = await response.json();

//         if (response.ok) {
//             // Store session and redirect to homepage
//             sessionStorage.setItem("authenticated", "true");
//             window.location.href = "homepage.html";
//         } else {
//             showError(data.message);
//         }
//     } catch (error) {
//         showError("Server error. Try again later.");
//     }
// });

const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevents the form from refreshing the page

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ inputUsername: username, inputPassword: password })
        });

        const data = await response.json();

        if (response.ok) {
            sessionStorage.setItem("authenticated", "true");
            window.location.href = "homepage.html";
        } else {
            errorMessage.textContent = data.message;
            errorMessage.classList.remove("hidden");
        }
    });
}

function loadComponent(id, filepath, callback) {
    fetch(filepath)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load ${filepath}`);
        return res.text();
      })
      .then(html => {
        document.getElementById(id).innerHTML = html;
        if (callback) callback();
      })
      .catch(err => {
        console.error(`Error loading ${filepath}:`, err);
      });
  }
  
  
// Only load components on pages that need them
loadComponent("header-container", "components/header.html", () => {
    // Example: attach icon click events if needed
    const icon = document.querySelector(".icon");
    if (icon) {
      icon.addEventListener("click", () => {
        console.log("Header icon clicked!");
      });
    }
  });

// Function to show error messages
function showError(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
}


