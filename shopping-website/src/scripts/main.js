// Featured Products (Home Page)
const featuredProducts = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&crop=faces",
        description: "Premium noise-cancelling wireless headphones",
        featured: true
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        description: "Advanced fitness tracking and notifications",
        featured: true
    },
    {
        id: 3,
        name: "4K Webcam",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        description: "Crystal clear video for streaming and calls",
        featured: true
    },
    {
        id: 4,
        name: "USB-C Hub",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop",
        description: "Multi-port connectivity adapter",
        featured: true
    },
    {
        id: 5,
        name: "Mechanical Keyboard",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1587829191301-401b41b4ef6e?w=400&h=300&fit=crop",
        description: "Professional gaming keyboard with RGB",
        featured: true
    },
    {
        id: 6,
        name: "Portable Speaker",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1589003077984-894e133da19f?w=400&h=300&fit=crop",
        description: "High-quality audio in compact form",
        featured: true
    }
];

// All Products (Products Page)
const allProducts = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&crop=faces",
        description: "Premium noise-cancelling wireless headphones",
        featured: true
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        description: "Advanced fitness tracking and notifications",
        featured: true
    },
    {
        id: 3,
        name: "4K Webcam",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        description: "Crystal clear video for streaming and calls",
        featured: true
    },
    {
        id: 4,
        name: "USB-C Hub",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop",
        description: "Multi-port connectivity adapter",
        featured: true
    },
    {
        id: 5,
        name: "Mechanical Keyboard",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1587829191301-401b41b4ef6e?w=400&h=300&fit=crop",
        description: "Professional gaming keyboard with RGB",
        featured: true
    },
    {
        id: 6,
        name: "Portable Speaker",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1589003077984-894e133da19f?w=400&h=300&fit=crop",
        description: "High-quality audio in compact form",
        featured: true
    },
    {
        id: 7,
        name: "USB-C Cable",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1626162384600-6c5e0512b94b?w=400&h=300&fit=crop",
        description: "Durable high-speed USB-C charging cable",
        featured: false
    },
    {
        id: 8,
        name: "Laptop Stand",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
        description: "Adjustable aluminum laptop stand",
        featured: false
    },
    {
        id: 9,
        name: "Wireless Mouse",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
        description: "Ergonomic wireless mouse with precision",
        featured: false
    },
    {
        id: 10,
        name: "Phone Ring Light",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1631509491837-ee4ade1cf44f?w=400&h=300&fit=crop",
        description: "LED ring light for streaming and video",
        featured: false
    },
    {
        id: 11,
        name: "Desk Lamp",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1565636192335-14c05a2a0c59?w=400&h=300&fit=crop",
        description: "Modern LED desk lamp with USB charging",
        featured: false
    },
    {
        id: 12,
        name: "Screen Protector",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1605559424843-9e4c3ca4628a?w=400&h=300&fit=crop",
        description: "Tempered glass screen protector pack of 3",
        featured: false
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    const user = localStorage.getItem('user');
    
    if (user) {
        // User is logged in - show home page
        showHomePage();
    } else {
        // User not logged in - show login page
        showLoginPage();
    }
    
    setupLoginHandlers();
});

// Show login page
function showLoginPage() {
    const loginPage = document.getElementById('login-page');
    const homePage = document.getElementById('home-page');
    
    if (loginPage) loginPage.style.display = 'flex';
    if (homePage) homePage.style.display = 'none';
}

// Show home page
function showHomePage() {
    const loginPage = document.getElementById('login-page');
    const homePage = document.getElementById('home-page');
    
    if (loginPage) loginPage.style.display = 'none';
    if (homePage) homePage.style.display = 'block';
    
    displayFeaturedProducts();
    updateUserDisplay();
    showSection('home');
}

// Setup login form handlers
function setupLoginHandlers() {
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
            if (loginBox) loginBox.style.display = 'none';
            if (signupBox) signupBox.style.display = 'block';
        });
    }

    if (toggleLogin) {
        toggleLogin.addEventListener('click', function(e) {
            e.preventDefault();
            if (loginBox) loginBox.style.display = 'block';
            if (signupBox) signupBox.style.display = 'none';
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
                
                // Show success and transition to home page
                alert('Login successful! Welcome to ShopHub');
                loginForm.reset();
                showHomePage();
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
                
                alert('Account created successfully! Welcome to ShopHub');
                signupForm.reset();
                showHomePage();
            }
        });
    }
}

// Display featured products
function displayFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    container.innerHTML = featuredProducts.map(product => `
        <div class="product featured-badge">
            <span class="badge">Featured</span>
            <img src="${product.image}" alt="${product.name}">
            <div class="product-content">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <div class="price">$${product.price}</div>
                <button class="button" onclick="addToCart(${product.id}, '${product.name.replace(/'/g, "\\'")}', ${product.price})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Add to cart functionality
function addToCart(productId, productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart!`);
}

// Update user display in header
function updateUserDisplay() {
    const user = localStorage.getItem('user');
    const logoutLink = document.querySelector('.login-link');
    
    if (logoutLink && user) {
        const userData = JSON.parse(user);
        const userEmail = userData.email || userData.name;
        logoutLink.textContent = `👤 ${userEmail} (Logout)`;
    }
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('user');
        localStorage.removeItem('cart');
        showLoginPage();
        document.getElementById('loginForm').reset();
        document.getElementById('signupForm').reset();
    }
}

// Show different sections (Home, Products, Checkout)
function showSection(sectionId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => section.style.display = 'none');
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
    
    if (sectionId === 'products') {
        displayAllProducts();
    } else if (sectionId === 'checkout') {
        displayCheckout();
    } else if (sectionId === 'home') {
        displayFeaturedProducts();
    }
}

// Display all products (Products page)
function displayAllProducts() {
    const container = document.getElementById('all-products');
    if (!container) return;

    container.innerHTML = allProducts.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-content">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <div class="price">$${product.price}</div>
                <button class="button" onclick="addToCart(${product.id}, '${product.name.replace(/'/g, "\\'")}', ${product.price})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Display checkout page
function displayCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartList = document.getElementById('cart-list');
    
    if (cart.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty. <a href="#" onclick="showSection(\'products\'); return false;">Continue Shopping</a></p>';
        updateOrderSummary([]);
        return;
    }

    cartList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <p>Quantity: 
                    <button onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartQuantity(${item.id}, 1)">+</button>
                </p>
            </div>
            <div class="item-total">
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    updateOrderSummary(cart);
}

// Update order summary
function updateOrderSummary(cart) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 10 : 0;
    const total = subtotal + shipping;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Update cart quantity
function updateCartQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCheckout();
    }
}

// Remove item from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCheckout();
}

// Clear entire cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        localStorage.removeItem('cart');
        displayCheckout();
    }
}

// Proceed to payment
function proceedToPayment() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 10;
    alert(`Processing payment for $${total.toFixed(2)}. Thank you for your purchase!`);
    localStorage.removeItem('cart');
    showSection('home');
}
