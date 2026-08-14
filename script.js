// Initialize empty array for cart items
let cart = [];

function addToCart(plantName, price) {
    // Add item object to cart array
    cart.push({ name: plantName, price: price });
    
    // Update counter text inside HTML element
    document.getElementById('cart-counter').innerText = cart.length;
    
    // Send a pop-up alert confirmation to user
    alert(`${plantName} has been successfully added to your cart!`);
    
    console.log("Current Cart Content:", cart);
}

