

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Password requirements
    var passwordMinLength = 5;
    var passwordMaxLength = 10;

    if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password.length < passwordMinLength || password.length > passwordMaxLength) {
        alert("Password must be between " + passwordMinLength + " and " + passwordMaxLength + " characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Registration successful! Redirecting to sign-in page...");
    window.location.href = 'Signin.html'; 
});

document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Password requirements
    var passwordMinLength = 5;
    var passwordMaxLength = 10;

    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    if (password.length < passwordMinLength || password.length > passwordMaxLength) {
        alert("Password must be between " + passwordMinLength + " and " + passwordMaxLength + " characters.");
        return;
    }

    
    alert("Attempting to sign in...");
    
});