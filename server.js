const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
    const portfolioData = {
        name: 'Kenny Palacín Cristóbal',
        title: 'Desarrollador Full Stack',
        email: 'kenny.palacin@outlook.com',
        github: 'https://github.com/Kenny2006-PE',
        linkedin: 'https://www.linkedin.com/in/kenny-palacin/',
        skills: [
            { name: 'JavaScript', level: 85 },
            { name: 'React', level: 80 },
            { name: 'Next.js', level: 75 },
            { name: 'Express.js', level: 80 },
            { name: 'Spring Boot', level: 75 },
            { name: 'MySQL', level: 80 },
            { name: 'HTML/CSS', level: 90 },
            { name: 'Leaflet Maps', level: 70 }
        ],
        projects: [
            {
                title: 'MarketMap',
                description: 'Plataforma web de compra y venta de artículos de segunda mano con visualización en mapa interactivo. Desarrollada originalmente para aplicativos móviles con Kotlin, implementé la versión web con React y mapas interactivos usando Leaflet',
                technologies: ['React', 'Spring Boot', 'MySQL', 'Leaflet Maps', 'Bootstrap'],
                image: '/images/marketmap.svg',
                github: 'https://github.com/Kenny2006-PE/MarketMap',
                demo: 'https://marketmap-demo.vercel.app'
            },
            {
                title: 'ReservaTec - Tesis',
                description: 'Plataforma web para institutos que permite la reserva de campos deportivos dentro del campus universitario. Sistema completo con gestión de horarios, disponibilidad y usuarios desarrollado como proyecto de tesis',
                technologies: ['Next.js', 'Express.js', 'MySQL', 'JWT', 'Tailwind CSS'],
                image: '/images/campus-booking.svg',
                github: 'https://github.com/Kenny2006-PE/ReservaTec',
                demo: 'En desarrollo'
            },
            {
                title: 'Portfolio Personal',
                description: 'Mi portafolio personal desarrollado con Node.js y Express, featuring diseño moderno y responsive con animaciones suaves',
                technologies: ['Node.js', 'Express', 'EJS', 'Bootstrap', 'AOS'],
                image: '/images/portfolio.svg',
                github: 'https://github.com/Kenny2006-PE/portfolio',
                demo: 'https://kenny-portfolio.herokuapp.com'
            }
        ]
    };
    
    res.render('index', { data: portfolioData });
});

// Ruta para contacto (por si quieres agregar un formulario)
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Aquí puedes agregar lógica para enviar emails
    console.log('Mensaje recibido:', { name, email, message });
    res.json({ success: true, message: 'Mensaje enviado correctamente' });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});