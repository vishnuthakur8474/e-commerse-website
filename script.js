const products = [
    { id: 1, name: "Men's Casual Shirt", category: "men", type: "casual", price: 29.99 * 83, image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fE1lbidzJTIwQ2FzdWFsJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D" },
    { id: 2, name: "Women's Floral Dress", category: "women", type: "casual", price: 49.99 * 83, image: "https://plus.unsplash.com/premium_photo-1724076170783-91f068a1563d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V29tZW4ncyUyMEZsb3JhbCUyMERyZXNzfGVufDB8fDB8fHww" },
    { id: 3, name: "Kids' Hoodie", category: "kids", type: "casual", price: 24.99 * 83, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSww800hVvDRR6RghXlLqH9doRpqDn1w32x9OgKIjW9eIiQVlqnsTuMdBBua0Qq3lqiSanNRKTlap6iR8IK_3V8k_4r3qtpa94qfwuffaZ6" },
    { id: 4, name: "Men's Formal Suit", category: "men", type: "formal", price: 149.99 * 83, image: "https://images.unsplash.com/photo-1515736076039-a3ca66043b27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1lbidzJTIwRm9ybWFsJTIwU3VpdHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 5, name: "Women's Sportswear Set", category: "women", type: "sportswear", price: 69.99 * 83, image: "https://images.unsplash.com/photo-1600457006675-b5a41d9cdd2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fFdvbWVuJ3MlMjBTcG9ydHN3ZWFyJTIwU2V0fGVufDB8fDB8fHww" },
    { id: 6, name: "Kids' Sneakers", category: "kids", type: "sportswear", price: 39.99 * 83, image: "https://images.unsplash.com/photo-1650751909852-036292e06f1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fEtpZHMnJTIwU25lYWtlcnN8ZW58MHx8MHx8fDA%3D" },
    { id: 7, name: "Men's Leather Belt", category: "men", type: "accessories", price: 19.99 * 83, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1GzBwJaZI_1WWxOUyujPSAj157G6WtWtLM46gmR4mFTn9vTnFLXeq1E0yvESLxNMdu1kge0EC3l8-pulPM7CYG6KUjARJqhSHb6uNOMhR2BVCGFzcUL_kfw" },
    { id: 8, name: "Women's Handbag", category: "women", type: "accessories", price: 59.99 * 83, image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhbmRiYWd8ZW58MHx8MHx8fDA%3D" },
    { id: 9, name: "Kids' Baseball Cap", category: "kids", type: "accessories", price: 14.99 * 83, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTeWakmZYkRDBhXiM9Ih_bhgL4ILFlceNyDANhPMpyCy0rhroWlVYpoRw-oJ0EKRks0tRdsCB-nzsoSstSWOzumZ6QFiA2Jlw" },
    { id: 10, name: "Men's Running Shoes", category: "men", type: "sportswear", price: 89.99 * 83, image: "https://images.unsplash.com/photo-1715693268859-438b2136ef22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lbidzJTIwcnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww" },
    { id: 11, name: "Women's Formal Blazer", category: "women", type: "formal", price: 79.99 * 83, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRU81B-es-eWvmEFlfw3exxTIlUYmOe-BWin7-BHnx_Uj35cOIdhSFZEB3P6M1UIn9loL4TNijWsrPA8nJb8Qqlb5A5L2rqxEwmwDGziur74hfophc3PJ_aRw" },
    { id: 12, name: "Kids' Party Dress", category: "kids", type: "formal", price: 34.99 * 83, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTDFH_W1suAwFVdpdZpZSYYGYhM8KtcRt__TJlGQBGpMTHCSJRQxWjscyLUhwj_v37XvZDIx85d861XThBOa3GsbA4wOwzQvLWG5E_bz8Uk" },
];

let cart = [];

function displayProducts(filteredProducts) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.type.charAt(0).toUpperCase() + product.type.slice(1)}</p>
                    <p class="price">₹${product.price.toFixed(2)}</p>
                    <div class="buttons">
                        <button onclick="addToCart(${product.id})">Add to Cart</button>
                        <button class="order-now" onclick="orderNow(${product.id})">Order Now</button>
                    </div>
                `;
        productGrid.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
    Swal.fire({
        title: 'Added to Cart!',
        text: `${product.name} has been added to your cart!`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        confirmButtonColor: '#FFD814'
    });
}

function orderNow(productId) {
    const product = products.find(p => p.id === productId);
    Swal.fire({
        title: 'Order Placed!',
        text: `Your order for ${product.name} has been placed. You'll be redirected to the shopping section.`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        confirmButtonColor: '#FFD814'
    });
    document.getElementById('products').style.display = 'block';
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('hero').style.display = 'flex';
    document.getElementById('reviews').style.display = 'block';
    document.getElementById('ask-question').style.display = 'block';
    document.getElementById('about').style.display = 'block';
    document.getElementById('social-media').style.display = 'block';
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
                    <span>${item.name}</span>
                    <span>₹${item.price.toFixed(2)}</span>
                    <button onclick="removeFromCart(${index})">Remove</button>
                `;
        cartItems.appendChild(cartItem);
    });
    cartTotal.textContent = `Total: ₹${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function showCart() {
    document.getElementById('products').style.display = 'none';
    document.getElementById('cart-section').style.display = 'block';
    document.getElementById('hero').style.display = 'none';
    document.getElementById('reviews').style.display = 'none';
    document.getElementById('ask-question').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('social-media').style.display = 'none';
    document.querySelector('#cart-section').scrollIntoView({ behavior: 'smooth' });
}

function applyFilters() {
    const category = document.getElementById('category-filter').value;
    const price = document.getElementById('price-filter').value;
    let filteredProducts = products;

    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.type === category);
    }

    if (price !== 'all') {
        const [min, max] = price.split('-').map(Number);
        filteredProducts = filteredProducts.filter(p =>
            max ? p.price >= min && p.price <= max : p.price >= min
        );
    }

    displayProducts(filteredProducts);
}

function filterByCategory(category) {
    let filteredProducts = products;
    if (category !== 'all') {
        filteredProducts = products.filter(p => p.category === category);
    }
    displayProducts(filteredProducts);
    document.getElementById('products').style.display = 'block';
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('hero').style.display = 'flex';
    document.getElementById('reviews').style.display = 'block';
    document.getElementById('ask-question').style.display = 'block';
    document.getElementById('about').style.display = 'block';
    document.getElementById('social-media').style.display = 'block';
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
}

function searchProducts() {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    if (query === '') {
        displayProducts(products); // Show all products if search is empty
        return;
    }
    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
    document.getElementById('products').style.display = 'block';
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('hero').style.display = 'flex';
    document.getElementById('reviews').style.display = 'block';
    document.getElementById('ask-question').style.display = 'block';
    document.getElementById('about').style.display = 'block';
    document.getElementById('social-media').style.display = 'block';
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
}

function submitQuestion() {
    const name = document.getElementById('question-name').value;
    const email = document.getElementById('question-email').value;
    const message = document.getElementById('question-message').value;

    if (name && email && message) {
        Swal.fire({
            title: 'Question Submitted!',
            text: `Thank you, ${name}! Your question has been submitted. We'll reach out soon!`,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
            confirmButtonColor: '#FFD814'
        });
        document.getElementById('question-name').value = '';
        document.getElementById('question-email').value = '';
        document.getElementById('question-message').value = '';
    } else {
        Swal.fire({
            title: 'Incomplete Form!',
            text: 'Please fill in all fields.',
            icon: 'error',
            confirmButtonColor: '#FFD814'
        });
    }
}

function checkout() {
    if (cart.length === 0) {
        Swal.fire({
            title: 'Empty Cart!',
            text: 'Your cart is empty!',
            icon: 'error',
            confirmButtonColor: '#FFD814'
        });
        return;
    }
    Swal.fire({
        title: 'Thank You!',
        text: 'Thank you for your purchase!',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        confirmButtonColor: '#FFD814'
    });
    cart = [];
    updateCart();
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('products').style.display = 'block';
    document.getElementById('hero').style.display = 'flex';
    document.getElementById('reviews').style.display = 'block';
    document.getElementById('ask-question').style.display = 'block';
    document.getElementById('about').style.display = 'block';
    document.getElementById('social-media').style.display = 'block';
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.textContent !== 'View Cart' && this.textContent !== 'All Clothing' && this.textContent !== 'Men' && this.textContent !== 'Women' && this.textContent !== 'Kids') {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            document.getElementById('products').style.display = 'block';
            document.getElementById('cart-section').style.display = 'none';
            document.getElementById('hero').style.display = sectionId === 'hero' ? 'flex' : 'flex';
            document.getElementById('reviews').style.display = sectionId === 'reviews' ? 'block' : 'block';
            document.getElementById('ask-question').style.display = sectionId === 'ask-question' ? 'block' : 'block';
            document.getElementById('about').style.display = sectionId === 'about' ? 'block' : 'block';
            document.getElementById('social-media').style.display = sectionId === 'social-media' ? 'block' : 'block';
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Animation on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(section);
});

// Initial product display
displayProducts(products);
