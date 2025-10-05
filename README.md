# 🚀 Portafolio Kenny - Desarrollador Full Stack

Un portafolio profesional moderno creado con Node.js, Express y tecnologías web modernas.

## ✨ Características

- **Diseño Moderno**: Interfaz moderna y atractiva con animaciones suaves
- **Responsive**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Animaciones**: Efectos de scroll y transiciones elegantes con AOS
- **Formulario de Contacto**: Funcional con validación
- **SEO Optimizado**: Estructura semántica y metadatos apropiados
- **Alto Rendimiento**: Código optimizado y assets comprimidos

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **EJS** - Motor de plantillas

### Frontend
- **Bootstrap 5** - Framework CSS
- **Font Awesome** - Iconos
- **AOS** - Animaciones on scroll
- **JavaScript ES6+** - Interactividad

### Dependencias
- **Nodemon** - Desarrollo con auto-reload

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm (viene con Node.js)

### Pasos de instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/kenny/portafolio-kenny.git
   cd portafolio-kenny
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar en modo desarrollo:**
   ```bash
   npm run dev
   ```

4. **Iniciar en modo producción:**
   ```bash
   npm start
   ```

5. **Abrir en el navegador:**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
portafolio-kenny/
├── public/                 # Archivos estáticos
│   ├── css/
│   │   └── style.css      # Estilos personalizados
│   ├── js/
│   │   └── main.js        # JavaScript principal
│   └── images/            # Imágenes del portafolio
├── views/
│   └── index.ejs          # Plantilla principal
├── server.js              # Servidor Express
├── package.json           # Dependencias y scripts
└── README.md              # Este archivo
```

## ⚙️ Configuración

### Personalizar Información Personal

Edita el archivo `server.js` en la sección `portfolioData`:

```javascript
const portfolioData = {
    name: 'Tu Nombre',
    title: 'Tu Título Profesional',
    email: 'tu@email.com',
    github: 'https://github.com/tu-usuario',
    linkedin: 'https://linkedin.com/in/tu-perfil',
    // ... más configuraciones
};
```

### Agregar Proyectos

Modifica el array `projects` en `server.js`:

```javascript
projects: [
    {
        title: 'Nombre del Proyecto',
        description: 'Descripción detallada',
        technologies: ['Tech1', 'Tech2', 'Tech3'],
        image: '/images/proyecto.jpg',
        github: 'https://github.com/usuario/proyecto',
        demo: 'https://proyecto-demo.com'
    }
]
```

### Actualizar Habilidades

Edita el array `skills` con tus tecnologías:

```javascript
skills: [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    // ... más habilidades
]
```

## 🎨 Personalización de Estilos

Los estilos principales están en `public/css/style.css`. Puedes modificar:

- **Colores**: Variables CSS en `:root`
- **Fuentes**: Cambiar la familia de fuentes
- **Animaciones**: Ajustar duraciones y efectos
- **Layout**: Modificar espaciados y tamaños

### Variables CSS Principales

```css
:root {
    --primary-color: #6c5ce7;    /* Color principal */
    --secondary-color: #a29bfe;  /* Color secundario */
    --dark-color: #2d3436;       /* Color oscuro */
    --bg-dark: #1a1a2e;          /* Fondo oscuro */
}
```

## 📧 Formulario de Contacto

El formulario envía datos al endpoint `/contact`. Para configurar el envío de emails:

1. Instala un servicio de email (nodemailer, sendgrid, etc.)
2. Configura las credenciales en variables de entorno
3. Implementa la lógica en el endpoint POST `/contact`

## 🌐 Despliegue

### Heroku
```bash
# Instalar Heroku CLI
npm install -g heroku

# Login y crear app
heroku login
heroku create tu-portafolio

# Desplegar
git push heroku main
```

### Netlify (para versión estática)
1. Construir versión estática
2. Subir carpeta `public` a Netlify
3. Configurar redirecciones si es necesario

### Vercel
```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel
```

## 🔧 Scripts Disponibles

- `npm start` - Iniciar servidor en producción
- `npm run dev` - Iniciar servidor en desarrollo (con nodemon)
- `npm test` - Ejecutar tests (configurar si es necesario)

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 Mobile: 320px - 768px
- 📱 Tablet: 768px - 1024px
- 💻 Desktop: 1024px+

## 🎯 SEO y Performance

- Meta tags optimizados
- Imágenes optimizadas
- CSS y JS minificados en producción
- Lazy loading de imágenes
- Estructura semántica HTML5

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Kenny - [tu@email.com](mailto:tu@email.com)

Enlace del Proyecto: [https://github.com/kenny/portafolio-kenny](https://github.com/kenny/portafolio-kenny)

---

⭐ ¡Si te gustó este proyecto, dale una estrella en GitHub!

## 🔄 Changelog

### v1.0.0
- ✨ Lanzamiento inicial
- 🎨 Diseño moderno y responsive
- 📧 Formulario de contacto funcional
- 🚀 Animaciones y efectos interactivos
- 📱 Optimización móvil completa