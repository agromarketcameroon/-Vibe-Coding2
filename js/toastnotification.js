
  // List of 50 fake purchased products
  const toastProducts = [
    { name: 'pH Mètre du sol 4-en-1', img: 'https://agromarketcameroon.com/images/phs1.jpg' },
    { name: 'Analyseur NPK du sol', img: 'https://agromarketcameroon.com/images/npk1.jpg' },
    { name: 'Testeur TDS/EC pour eau', img: 'https://agromarketcameroon.com/images/tdsec1.jpg' },
    { name: 'Humidimètre intelligent', img: 'https://agromarketcameroon.com/images/hum1.jpg' },
    { name: 'pH Mètre des liquides', img: 'https://agromarketcameroon.com/images/phwt1.jpg' },
    { name: 'Fertilité 6-en-1', img: 'https://agromarketcameroon.com/images/phf1.jpg' },
    // Repeat or add more to reach 50
  ];

  // Show toast with product info
  function showToast(product) {
    const toast = document.getElementById('notification-toast');
    document.getElementById('toast-img').src = product.img;
    document.getElementById('toast-title').textContent = product.name;
    document.getElementById('toast-time').textContent = 'il y a quelques secondes';

    toast.classList.remove('hidden');
    toast.classList.add('flex');

    // Auto-hide after 6 seconds
    setTimeout(() => hideToast(), 6000);
  }

  function hideToast() {
    const toast = document.getElementById('notification-toast');
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  }

  // Randomly trigger a toast every 10-20 seconds
  function cycleToasts() {
    const delay = Math.random() * (20000 - 10000) + 10000; // 10s to 20s
    setTimeout(() => {
      const product = toastProducts[Math.floor(Math.random() * toastProducts.length)];
      showToast(product);
      cycleToasts(); // Schedule next toast
    }, delay);
  }

  // Start the toast cycle
  document.addEventListener('DOMContentLoaded', cycleToasts);