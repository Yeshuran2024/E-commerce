// Login Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const toggleSignup = document.querySelector('.toggle-signup');
    const toggleLogin = document.querySelector('.toggle-login');
    const loginBox = document.querySelector('.login-box');
    const signupBox = document.getElementById('signupBox');

    // Toggle between login and signup
    if (toggleSignup) {
        toggleSignup.addEventListener('click', function(e) {
            e.preventDefault();
            loginBox.style.display = 'none';
            signupBox.style.display = 'block';
        });
    }

    if (toggleLogin) {
        toggleLogin.addEventListener('click', function(e) {
            e.preventDefault();
            loginBox.style.display = 'block';
            signupBox.style.display = 'none';
        });
    }

    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Clear previous errors
            document.getElementById('emailError').textContent = '';
            document.getElementById('passwordError').textContent = '';
            
            // Validation
            let isValid = true;
            
            if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email';
                isValid = false;
            }
            
            if (password.length < 6) {
                document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
                isValid = false;
            }
            
            if (isValid) {
                // Store login data in localStorage
                const userData = {
                    email: email,
                    loginTime: new Date().toISOString()
                };
                localStorage.setItem('user', JSON.stringify(userData));
                
                // Show success message
                alert('Login successful! Welcome to ShopHub');
                loginForm.reset();
                
                // Redirect to home page after 1 second
                setTimeout(function() {
                    window.location.href = '../index.html';
                }, 1000);
            }
        });
    }

    // Signup form submission
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            let isValid = true;
            
            if (fullname.length < 2) {
                alert('Please enter a valid name');
                isValid = false;
            }
            
            if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                alert('Please enter a valid email');
                isValid = false;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters');
                isValid = false;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                isValid = false;
            }
            
            if (isValid) {
                // Store user data
                const newUser = {
                    name: fullname,
                    email: email,
                    createdAt: new Date().toISOString()
                };
                localStorage.setItem('user', JSON.stringify(newUser));
                
                alert('Account created successfully! You are now logged in.');
                signupForm.reset();
                
                // Redirect to home page
                setTimeout(function() {
                    window.location.href = '../index.html';
                }, 1000);
            }
        });
    }

    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (user) {
        updateUserDisplay();
    }
});

// Update user display in header
function updateUserDisplay() {
    const user = JSON.parse(localStorage.getItem('user'));
    const userEmail = user.email || user.name;
    const loginLink = document.querySelector('.login-link');
    
    if (loginLink) {
        loginLink.innerHTML = `<span class="user-icon">👤 ${userEmail}</span>`;
        loginLink.href = '#logout';
        loginLink.addEventListener('click', function(e) {
            if (e.target.closest('.user-icon')) {
                e.preventDefault();
                if (confirm('Are you sure you want to logout?')) {
                    localStorage.removeItem('user');
                    location.reload();
                }
            }
        });
    }
}

// Logout functionality
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('user');
        window.location.href = '../index.html';
    }
}
