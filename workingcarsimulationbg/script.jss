// Optional: Add glowing neon effect to car dynamically
const carBody = document.querySelector('.body');
setInterval(() => {
  carBody.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px #00f5d4`;
}, 200);
