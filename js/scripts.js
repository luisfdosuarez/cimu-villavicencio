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
    const parallaxSection = document.querySelector('.parallax-section'); // Selecciona la sección parallax
    const parallaxText = document.getElementById('parallaxText'); // Selecciona el texto dentro de la sección
    const scrollPosition = window.scrollY; // Obtiene la posición actual del scroll vertical

    // Fase 1: Mostrar el texto en el centro, manteniendo el fondo blanco
    // Rango de scroll donde el texto permanece en el centro sin crecimiento
    if (scrollPosition > 100 && scrollPosition < 800) {
        parallaxText.style.opacity = 1; // Asegura que el texto esté visible
        parallaxText.style.transform = 'scale(1)'; // Mantiene el tamaño inicial sin crecimiento
    }

    // Fase 2: Crecimiento del texto con el scroll
    // A medida que el usuario hace scroll, el texto crece en tamaño
    else if (scrollPosition >= 800 && scrollPosition < 1800) {
        // scaleFactor controla el tamaño del texto, con el divisor afectando la velocidad de crecimiento
        const scaleFactor = 1 + (scrollPosition - 800) / 150; // Crece más rápido si el divisor es menor
        parallaxText.style.transform = `scale(${scaleFactor})`; // Aplica el tamaño calculado
    } else if (scrollPosition < 100) {
        parallaxText.style.opacity = 0; // Oculta el texto antes de entrar en la sección
        parallaxText.style.transform = 'scale(1)'; // Reinicia el tamaño al original
    }

    // Fase 3: Cambio de fondo a azul cuando el texto alcanza un gran tamaño
    // En este rango, el fondo cambia a azul y el texto desaparece
    if (scrollPosition >= 1800 && scrollPosition < 2800) {
        parallaxSection.classList.add('blue-background'); // Cambia el fondo a azul
        parallaxSection.classList.remove('black-background'); // Asegura que el fondo negro no esté activo
        parallaxText.style.opacity = 0; // Oculta el texto para que solo el fondo sea visible
    }

    // Fase 4: Transición a negro al final del scroll
    // Después de un cierto scroll, cambia el fondo a negro
    else if (scrollPosition >= 2800) {
        parallaxSection.classList.remove('blue-background'); // Quita el fondo azul
        parallaxSection.classList.add('black-background'); // Cambia el fondo a negro
    } else {
        // Si el usuario vuelve hacia arriba, elimina cualquier fondo de color
        parallaxSection.classList.remove('blue-background');
        parallaxSection.classList.remove('black-background');
    }
});
