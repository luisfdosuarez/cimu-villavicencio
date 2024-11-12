// scripts.js

document.addEventListener('scroll', function() {
    const parallaxContainer = document.querySelector('.parallax-container');
    const scrollPosition = window.scrollY;

    // Cambia la imagen de fondo después de 300 píxeles de desplazamiento
    if (scrollPosition > 300) {
        parallaxContainer.style.backgroundImage = "url('../img/CIMU_NO_RIDGES.png')";
    } else {
        parallaxContainer.style.backgroundImage = "url('../img/CIMU_COIN.jpg')";
    }
});
