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

    // Fase 1: Subida y aparición del texto en el centro
    if (scrollPosition > 100 && scrollPosition < 800) {
        parallaxText.style.opacity = 1;
        parallaxText.style.transform = 'scale(0.8)'; // Tamaño inicial ligeramente más pequeño
    }

    // Fase 2: Crecimiento gradual del texto al hacer scroll
    else if (scrollPosition >= 800 && scrollPosition < 2000) {
        const scaleFactor = 0.8 + (scrollPosition - 800) / 600; // Ajuste gradual, inicia en 0.8 y crece
        parallaxText.style.transform = `scale(${scaleFactor})`;
    } else if (scrollPosition < 100) {
        parallaxText.style.opacity = 0;
        parallaxText.style.transform = 'scale(0.8)';
    }

    // Fase 3: Fondo cambia al color del texto cuando este alcanza gran tamaño
    if (scrollPosition >= 1600 && scrollPosition < 2500) {
        parallaxSection.classList.add('blue-background');
        parallaxSection.classList.remove('black-background');
    } else if (scrollPosition >= 2500) {
        // Fase 4: Transición a negro
        parallaxSection.classList.remove('blue-background');
        parallaxSection.classList.add('black-background');
    } else {
        parallaxSection.classList.remove('blue-background');
        parallaxSection.classList.remove('black-background');
    }
});
