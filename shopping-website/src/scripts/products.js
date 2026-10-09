// This file handles the loading and displaying of product data. 
// It fetches data from products.json and populates the product listings on the products.html page.

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

function fetchProducts() {
    fetch('../assets/data/products.json')
        .then(response => response.json())
        .then(data => displayProducts(data))
        .catch(error => console.error('Error fetching products:', error));
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const title = document.createElement('h3');
    title.textContent = product.name;

    const price = document.createElement('p');
    price.textContent = `$${product.price.toFixed(2)}`;

    const description = document.createElement('p');
    description.textContent = product.description;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.onclick = () => addToCart(product);

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(description);
    card.appendChild(button);

    return card;
}

function addToCart(product) {
    // Functionality to add product to cart will be implemented in cart.js
    console.log(`${product.name} added to cart`);
}