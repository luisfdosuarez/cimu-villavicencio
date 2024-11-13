document.addEventListener('scroll', function () {
    const welcomeText = document.getElementById('welcomeText');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        welcomeText.classList.add('visible');
    } else {
        welcomeText.classList.remove('visible');
    }
});

document.addEventListener('scroll', function () {
    const parallaxSection = document.querySelector('.parallax-section');
    const parallaxText = document.getElementById('parallaxText');
    const scrollPosition = window.scrollY;

    // Controla la opacidad y el tamaño del texto de forma más pausada
    if (scrollPosition > 100 && scrollPosition < 600) {
        parallaxText.style.opacity = 1;
        parallaxText.style.transform = `scale(1)`; // Mantiene el tamaño inicial hasta que llegue al centro
    } else if (scrollPosition >= 600 && scrollPosition < 1000) {
        const scaleFactor = 1 + (scrollPosition - 600) / 500; // Ajusta el factor de escala
        parallaxText.style.transform = `scale(${scaleFactor})`; // Crece gradualmente a partir de la posición 600
    } else if (scrollPosition < 100) {
        parallaxText.style.opacity = 0; // Oculta el texto antes de que entre a la sección
        parallaxText.style.transform = 'scale(1)';
    }

    // Cambia el fondo de la sección a azul cuando el texto alcanza cierto tamaño
    if (scrollPosition >= 800 && scrollPosition < 1500) {
        parallaxSection.classList.add('blue-background');
        parallaxSection.classList.remove('black-background');
    } else if (scrollPosition >= 1500) {
        // Cambia el fondo a negro cuando se sigue haciendo scroll
        parallaxSection.classList.remove('blue-background');
        parallaxSection.classList.add('black-background');
    } else {
        parallaxSection.classList.remove('blue-background');
        parallaxSection.classList.remove('black-background');
    }
});
