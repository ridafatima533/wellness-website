// Example: Adding interactivity for "Add to Cart" button
document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
      alert("Product added to cart!");
    });
  });