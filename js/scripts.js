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

    // Fase 1: Aparición del texto en el centro con tamaño inicial (fondo blanco)
    if (scrollPosition > 100 && scrollPosition < 1200) {
        parallaxText.style.opacity = 1;
        parallaxText.style.transform = 'scale(1)'; // Tamaño inicial
    }

    // Fase 2: Crecimiento gradual del texto al hacer scroll (zoom total)
    else if (scrollPosition >= 1200 && scrollPosition < 3000) {
        const scaleFactor = 1 + (scrollPosition - 1200) / 1000; // Crece lentamente
        parallaxText.style.transform = `scale(${scaleFactor})`;
    } else if (scrollPosition < 100) {
        parallaxText.style.opacity = 0;
        parallaxText.style.transform = 'scale(1)';
    }

    // Fase 3: Fondo cambia al color del texto cuando este ocupa toda la pantalla
    if (scrollPosition >= 2500 && scrollPosition < 3500) {
        parallaxSection.classList.add('blue-background');
        parallaxSection.classList.remove('black-background');
        parallaxText.style.opacity = 0; // Oculta el texto cuando se sale de la pantalla
    } else if (scrollPosition >= 3500) {
        // Fase 4: Transición a negro
        parallaxSection.classList.remove('blue-background');
        parallaxSection.classList.add('black-background');
    } else {
        parallaxSection.classList.remove('blue-background');
        parallaxSection.classList.remove('black-background');
    }
});
