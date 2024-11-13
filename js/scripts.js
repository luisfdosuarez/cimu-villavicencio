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

    // Fase 1: Aparición del texto en el centro en tamaño inicial (fondo blanco)
    if (scrollPosition > 100 && scrollPosition < 800) {
        parallaxText.style.opacity = 1;
        parallaxText.style.transform = 'scale(1)'; // Tamaño inicial
    }

    // Fase 2: Crecimiento gradual del texto al hacer scroll (zoom total)
    else if (scrollPosition >= 800 && scrollPosition < 1800) {
        const scaleFactor = 1 + (scrollPosition - 800) / 700; // Crece gradualmente
        parallaxText.style.transform = `scale(${scaleFactor})`;
    } else if (scrollPosition < 100) {
        parallaxText.style.opacity = 0;
        parallaxText.style.transform = 'scale(1)';
    }

    // Fase 3: Fondo cambia al color del texto cuando este ocupa toda la pantalla
    if (scrollPosition >= 1600 && scrollPosition < 2200) {
        parallaxSection.classList.add('blue-background');
        parallaxSection.classList.remove('black-background');
    } else if (scrollPosition >= 2200) {
        // Fase 4: Transición a negro
        parallaxSection.classList.remove('blue-background');
        parallaxSection.classList.add('black-background');
    } else {
        parallaxSection.classList.remove('blue-background');
        parallaxSection.classList.remove('black-background');
    }
});
