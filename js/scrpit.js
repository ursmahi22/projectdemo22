function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (In a real application, you'll verify credentials with a backend service)
    if (username === 'user' && password === 'password') {
        localStorage.setItem('loggedInUser', username); // Store username in localStorage
        window.location.href = 'profile.html'; // Redirect to the profile page
    } else {
        alert('Invalid username or password');
    }
    return false;
}

function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;
    const address = document.getElementById('address').value;

    // Simple signup (In a real application, you'll save user data with a backend service)
    alert(`Account created for ${username}`);
    window.location.href = 'index.html'; // Redirect to login page
    return false;
}

function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById('reset-email').value;
    
    // Simple mock password reset (In a real application, you'll handle it with a backend service)
    alert(`Password reset link has been sent to ${email}`);
    window.location.href = 'index.html'; // Redirect to login page
    return false;
}

function clearFields() {
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-password').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('email').value = '';
    document.getElementById('country').value = '';
    document.getElementById('address').value = '';
}
