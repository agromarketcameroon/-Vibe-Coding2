let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

function updateCart() {
  const list = document.getElementById('cart-items');
  list.innerHTML = '';
  cart.forEach((item, i) => {
    list.innerHTML += `<li>${item.product} - FCFA${item.price}</li>`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const waBtn = document.getElementById('whatsapp-order');
  waBtn.addEventListener('click', () => {
    const message = cart.map(item => `${item.product} - ${item.price} FCFA`).join('\n');
    const url = `https://wa.me/237671357556?text=${encodeURIComponent("Salut Agromarket, j'aimerais commander:\n\n" + message)}`;
    window.open(url, '_blank');
  });
});
