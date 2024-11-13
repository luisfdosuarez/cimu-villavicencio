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

    // Fase 1: Mostrar el texto en el centro con fondo blanco
    if (scrollPosition > 100 && scrollPosition < 800) {
        parallaxText.style.opacity = 1;
        parallaxText.style.transform = 'scale(1)';
    }

    // Fase 2: Crecimiento gradual del texto mientras el fondo permanece blanco
    else if (scrollPosition >= 800 && scrollPosition < 1800) {
        const scaleFactor = 1 + (scrollPosition - 800) / 1000; // Crece gradualmente
        parallaxText.style.transform = `scale(${scaleFactor})`;
    } else if (scrollPosition < 100) {
        parallaxText.style.opacity = 0;
        parallaxText.style.transform = 'scale(1)';
    }

    // Fase 3: Cambia el fondo a azul cuando el texto ocupa la pantalla
    if (scrollPosition >= 1800 && scrollPosition < 2500) {
        parallaxSection.classList.add('blue-background');
        parallaxSection.classList.remove('black-background');
        parallaxText.style.opacity = 0; // Oculta el texto cuando se sale de la pantalla
    } else if (scrollPosition >= 2500) {
        // Fase 4: Transición del fondo a negro
        parallaxSection.classList.remove('blue-background');
        parallaxSection.classList.add('black-background');
    } else {
        parallaxSection.classList.remove('blue-background');
        parallaxSection.classList.remove('black-background');
    }
});
