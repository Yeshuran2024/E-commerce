// This file manages the shopping cart functionality, including adding items to the cart, removing items, and calculating totals.

let cart = [];

// Function to add item to cart
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    updateCartDisplay();
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Function to calculate total price
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}

// Function to update cart display
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(itemElement);
    });

    const totalElement = document.createElement('div');
    totalElement.className = 'cart-total';
    totalElement.innerHTML = `Total: $${calculateTotal()}`;
    cartContainer.appendChild(totalElement);
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCartDisplay();
}