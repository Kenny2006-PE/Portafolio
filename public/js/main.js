// Inicializar AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cambiar estilo de navbar al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
        navbar.style.borderBottom = '1px solid rgba(108, 92, 231, 0.3)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    }
});

// Animar las barras de progreso cuando entran en viewport
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const progressBars = document.querySelectorAll('.progress-bar');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const skill = progressBar.getAttribute('data-skill');
            
            // Animar la barra de progreso
            setTimeout(() => {
                progressBar.style.width = skill + '%';
            }, 200);
        }
    });
}, observerOptions);

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Mostrar estado de carga
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (result.success) {
                showNotification('¡Mensaje enviado correctamente!', 'success');
                this.reset();
            } else {
                showNotification('Error al enviar el mensaje. Inténtalo de nuevo.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showNotification('Error al enviar el mensaje. Inténtalo de nuevo.', 'error');
        } finally {
            // Restaurar botón
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Función para mostrar notificaciones
function showNotification(message, type = 'success') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'success' ? 'success' : 'danger'} position-fixed`;
    notification.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        animation: slideInRight 0.5s ease;
    `;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} me-2"></i>
        ${message}
        <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
    `;
    
    // Agregar CSS para la animación
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideInRight 0.5s ease reverse';
            setTimeout(() => notification.remove(), 500);
        }
    }, 5000);
}

// Efecto de escritura para el título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Inicializar efectos adicionales cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de particles en el hero (opcional)
    createParticles();
    
    // Contador animado para años de experiencia (si lo agregas)
    animateCounters();
    
    // Lazy loading para imágenes
    implementLazyLoading();
    
    // Efecto glitch al nombre principal
    initGlitchEffect();
});

// Efecto glitch sutil para el nombre
function initGlitchEffect() {
    const heroTitle = document.querySelector('.hero-section h1');
    if (heroTitle) {
        const name = heroTitle.textContent;
        heroTitle.setAttribute('data-text', name);
        
        // Glitch ocasional cada 8-12 segundos
        setInterval(() => {
            if (Math.random() > 0.7) { // 30% de probabilidad
                heroTitle.style.animation = 'none';
                setTimeout(() => {
                    heroTitle.style.animation = '';
                }, 50);
            }
        }, Math.random() * 4000 + 8000);
    }
}

// Sistema de partículas dark anime - Matrix/Death Note/Tokyo Ghoul inspired
function createParticles() {
    // Crear contenedor global de partículas
    createDarkAnimeParticles();
    
    // Crear líneas estáticas
    createStaticLines();
    
    // Partículas flotantes en hero
    createHeroFloatingParticles();
}

// Sistema de partículas sutil y elegante
function createDarkAnimeParticles() {
    let particleContainer = document.querySelector('.dark-particles');
    if (!particleContainer) {
        particleContainer = document.createElement('div');
        particleContainer.className = 'dark-particles';
        document.body.appendChild(particleContainer);
    }
    
    // Símbolos más sutiles y elegantes
    const elegantSymbols = [
        // Símbolos de código elegantes
        '{', '}', '[', ']', '<', '>', '/', '\\', '|', '-', '+', '=',
        // Símbolos geométricos minimalistas
        '●', '○', '■', '□', '▲', '△', '◆', '◇',
        // Binarios simples
        '0', '1', '00', '01', '10', '11',
        // Símbolos matemáticos
        '∞', '≈', '∆', '∇', 'π', 'λ', 'Ω',
        // Algunos kanji sutiles
        '月', '星', '光', '心'
    ];
    
    // Función para crear partícula individual
    function createSingleParticle() {
        const particle = document.createElement('div');
        particle.className = 'dark-particle';
        
        const symbol = elegantSymbols[Math.floor(Math.random() * elegantSymbols.length)];
        particle.textContent = symbol;
        
        // Posición y propiedades más sutiles
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (10 + Math.random() * 8) + 's';
        particle.style.fontSize = (8 + Math.random() * 6) + 'px';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        // Colores más elegantes
        const colorRand = Math.random();
        let color;
        if (colorRand < 0.4) color = '#00bcd4';        // Cyan elegante
        else if (colorRand < 0.7) color = '#ffffff';   // Blanco
        else if (colorRand < 0.9) color = '#6a4c93';   // Purple elegante
        else color = '#9d4edd';                         // Purple claro
        
        particle.style.color = color;
        particle.style.opacity = 0.2 + Math.random() * 0.3; // Más sutil
        
        particleContainer.appendChild(particle);
        
        // Auto-eliminar
        setTimeout(() => {
            if (particle.parentNode) particle.remove();
        }, 18000);
    }
    
    // Menos partículas iniciales
    for (let i = 0; i < 12; i++) {
        setTimeout(() => createSingleParticle(), Math.random() * 3000);
    }
    
    // Generar partículas más espaciadas
    setInterval(() => {
        if (Math.random() < 0.5) createSingleParticle(); // Menos frecuentes
    }, 1200);
}

// Líneas estáticas de interferencia
function createStaticLines() {
    if (document.querySelector('.static-lines')) return;
    
    const staticLines = document.createElement('div');
    staticLines.className = 'static-lines';
    document.body.appendChild(staticLines);
}

// Partículas flotantes para hero section
function createHeroFloatingParticles() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        const techSymbols = ['<>', '{}', '[]', '()', '=>', 'λ', 'Φ', 'Ψ', '∞', '◊', '※', '∴', '∵', '∂'];
        
        particle.textContent = techSymbols[Math.floor(Math.random() * techSymbols.length)];
        particle.style.cssText = `
            position: absolute;
            font-family: 'Courier New', monospace;
            font-size: ${12 + Math.random() * 10}px;
            color: rgba(255, 255, 255, ${0.08 + Math.random() * 0.15});
            text-shadow: 0 0 10px currentColor;
            animation: float ${8 + Math.random() * 12}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
            z-index: 1;
            transform: rotate(${Math.random() * 360}deg);
        `;
        hero.appendChild(particle);
    }
    
    // Agregar CSS para la animación de partículas
    if (!document.getElementById('particles-styles')) {
        const style = document.createElement('style');
        style.id = 'particles-styles';
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
                50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Animar contadores
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        let current = 0;
        const increment = target / 100;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Iniciar animación cuando el elemento sea visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Lazy loading para imágenes
function implementLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Manejar redimensionamiento de ventana
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Recalcular animaciones si es necesario
        AOS.refresh();
    }, 250);
});

// Dark mode toggle (opcional - para futura implementación)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Aplicar modo oscuro guardado
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Preloader (opcional)
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});