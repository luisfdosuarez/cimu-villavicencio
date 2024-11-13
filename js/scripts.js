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

    // Calcula la opacidad y el tamaño del texto al hacer scroll
    if (scrollPosition > 100 && scrollPosition < 800) {
        parallaxText.style.opacity = 1;
        parallaxText.style.transform = `scale(${1 + (scrollPosition - 100) / 200})`; // Aumenta el tamaño del texto gradualmente
    } else if (scrollPosition < 100) {
        parallaxText.style.opacity = 0; // Oculta el texto antes de que entre a la sección
        parallaxText.style.transform = 'scale(1)';
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
    const trafficChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            datasets: [{
                label: 'Tránsito libre (vehículos)',
                data: [120, 150, 170, 130, 180, 220, 160], // Datos inventados
                borderColor: '#0056b3', // Color de línea azul profundo
                backgroundColor: 'rgba(0, 86, 179, 0.2)', // Relleno semitransparente
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
            }
        }
    });
});

// Seccion de videos

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('backgroundVideo1');
    const statusMessage = document.getElementById('statusMessage');

    // Verificar si el video se ha cargado correctamente
    video.oncanplay = function () {
        statusMessage.textContent = "El video se ha cargado y está listo para reproducirse.";
    };

    video.onerror = function () {
        statusMessage.textContent = "Error: No se pudo cargar el video. Verifica la ruta y el archivo.";
    };

    // Verificar el estado de reproducción
    video.onplay = function () {
        statusMessage.textContent = "El video se está reproduciendo correctamente.";
    };

    video.onpause = function () {
        statusMessage.textContent = "El video está en pausa.";
    };

    // Forzar la reproducción del video cuando esté listo
    video.play().catch(error => {
        console.error("Error al intentar reproducir el video:", error);
        statusMessage.textContent = "Error al intentar reproducir el video. Verifica la consola del navegador.";
    });
});
