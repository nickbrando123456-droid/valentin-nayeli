// Crear corazones flotantes aleatorios
function createHeart() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heart = document.createElement('div');
    const size = Math.random() * 20 + 10;

    heart.classList.add('heart');
    const colors = ['#fff', '#ffc2d1', '#ff0080'];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.innerHTML = '<i class="fas fa-heart"></i>';
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    heart.style.opacity = Math.random() * 0.8 + 0.2;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);
