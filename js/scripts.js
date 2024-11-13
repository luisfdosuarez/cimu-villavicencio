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

document.addEventListener('scroll', function () {
    const video1 = document.getElementById('backgroundVideo1');
    const text1 = document.getElementById('scrollText1');
    const video2 = document.getElementById('backgroundVideo2');
    const text2 = document.getElementById('scrollText2');
    const scrollPosition = window.scrollY;

    // Control para el primer video y texto
    if (scrollPosition > 200 && scrollPosition < 1000) {
        video1.style.opacity = 1; // Muestra el primer video
        video1.play(); // Reproduce el video
        text1.style.color = `rgba(255, 255, 255, ${(scrollPosition - 200) / 800})`; // Incrementa opacidad del texto
        text1.style.transform = `translate(-50%, -${(scrollPosition - 200) / 8}%)`; // Desplaza el texto hacia arriba
    } else {
        video1.style.opacity = 0; // Oculta el video fuera de rango
        video1.pause();
        text1.style.color = 'rgba(255, 255, 255, 0)'; // Oculta el texto
        text1.style.transform = 'translate(-50%, 0)'; // Restablece la posición del texto
    }

    // Control para el segundo video y texto
    if (scrollPosition >= 1000 && scrollPosition < 1800) {
        video2.style.opacity = 1; // Muestra el segundo video
        video2.play(); // Reproduce el video
        text2.style.color = `rgba(255, 255, 255, ${(scrollPosition - 1000) / 800})`; // Incrementa opacidad del texto
        text2.style.transform = `translate(-50%, -${(scrollPosition - 1000) / 8}%)`; // Desplaza el texto hacia arriba
    } else {
        video2.style.opacity = 0; // Oculta el video fuera de rango
        video2.pause();
        text2.style.color = 'rgba(255, 255, 255, 0)'; // Oculta el texto
        text2.style.transform = 'translate(-50%, 0)'; // Restablece la posición del texto
    }
});
