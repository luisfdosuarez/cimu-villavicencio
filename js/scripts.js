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
    const wazeLogo = document.getElementById('wazeLogo');
    const scrollPosition = window.scrollY;

    // Calcula la opacidad y el tamaño del texto al hacer scroll
    if (scrollPosition > 100 && scrollPosition < 800) {
        parallaxText.style.opacity = 1;
        parallaxText.style.transform = `scale(${1 + (scrollPosition - 100) / 200})`; // Aumenta el tamaño del texto gradualmente

        // Aumenta la opacidad del logo de Waze y el tamaño hasta 3x
        const visibility = (scrollPosition - 100) / 700; // Calcula el nivel de visibilidad
        wazeLogo.style.opacity = visibility; // Aparece gradualmente
        wazeLogo.style.transform = `translateX(-50%) scale(${1 + 2 * visibility})`; // Crece de 1x a 3x de tamaño
    } else if (scrollPosition < 100) {
        parallaxText.style.opacity = 0; // Oculta el texto antes de que entre a la sección
        parallaxText.style.transform = 'scale(1)';
        wazeLogo.style.opacity = 0; // Mantiene el logo invisible al inicio
        wazeLogo.style.transform = 'translateX(-50%) scale(1)'; // Restablece el tamaño y posición inicial del logo
    } else if (scrollPosition >= 800 && scrollPosition < 1200) {
        wazeLogo.style.opacity = 1; // Logo completamente visible cuando el texto está totalmente ampliado
        wazeLogo.style.transform = 'translateX(-50%) scale(3)'; // Tamaño final 3x
    } else if (scrollPosition >= 1200) {
        // Mueve el logo rápidamente hacia la derecha para que salga de la pantalla
        const moveRight = (scrollPosition - 1200) * 2; // Multiplica por un valor mayor para acelerar
        wazeLogo.style.transform = `translateX(${moveRight}px) scale(3)`;
        wazeLogo.style.opacity = Math.max(1 - (scrollPosition - 1200) / 150, 0); // Reduce opacidad más rápido para desaparecer
    }

    // Cambia el fondo de la sección a azul cuando el texto alcanza un cierto tamaño
    if (scrollPosition >= 500 && scrollPosition < 1200) {
        parallaxSection.classList.add('blue-background');
        parallaxSection.classList.remove('black-background');
    } else if (scrollPosition >= 1200) {
        // Cambia el fondo a negro cuando se sigue haciendo scroll
        parallaxSection.classList.remove('blue-background');
        parallaxSection.classList.add('black-background');
    } else {
        parallaxSection.classList.remove('blue-background');
        parallaxSection.classList.remove('black-background');
    }
});

// Configuración de la gráfica de tráfico de ejemplo
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('trafficChart').getContext('2d');
    let trafficChart;

    // Configuración inicial de la gráfica sin datos (opcional para simular una entrada de izquierda a derecha)
    const config = {
        type: 'line',
        data: {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            datasets: [{
                label: 'Tránsito libre (vehículos)',
                data: [120, 150, 170, 130, 180, 220, 160], // Datos ficticios
                borderColor: '#0056b3',
                backgroundColor: 'rgba(0, 86, 179, 0.2)',
                borderWidth: 2,
                pointRadius: 3,
                pointBackgroundColor: '#0056b3'
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Día de la semana'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Cantidad de vehículos'
                    }
                }
            },
            animation: {
                duration: 2000, // Duración de la animación
                easing: 'easeInOutQuart' // Tipo de animación
            }
        }
    };

    // Función para iniciar la animación de la gráfica
    function initializeChart() {
        if (!trafficChart) { // Solo crea la gráfica una vez
            trafficChart = new Chart(ctx, config);
        }
    }

    // Intersection Observer para activar la animación al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initializeChart(); // Inicia la animación cuando el gráfico entra en la vista
            }
        });
    }, { threshold: 0.5 }); // Se activa cuando al menos el 50% de la sección está en vista

    // Observa la sección de la gráfica
    const trafficSection = document.querySelector('.traffic-data-section');
    observer.observe(trafficSection);
});



// Seccion de videos


document.addEventListener('DOMContentLoaded', function() {
    const videoSections = document.querySelectorAll('.video-section');

    videoSections.forEach((section, index) => {
        const video = section.querySelector('video');
        const text = section.querySelector('.overlay-text');

        window.addEventListener('scroll', () => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                // Porcentaje de visibilidad de la sección
                const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
                const visibility = visibleHeight / windowHeight;

                // Ajustar opacidad del video y color del texto
                video.style.opacity = visibility;
                text.style.color = `rgba(255, 255, 255, ${visibility})`;

                // Mover el texto hacia arriba
                const translateY = 20 - (20 * visibility);
                text.style.transform = `translate(-50%, -${translateY}%)`;
            }
        });
    });
});



