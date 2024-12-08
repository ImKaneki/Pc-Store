// Script para manejar interacciones en el sitio web

// 1. Mensaje emergente al comprar un producto
const botonesComprar = document.querySelectorAll('.productos .tarjeta button');

botonesComprar.forEach(boton => {
    boton.addEventListener('click', () => {
        alert('¡Gracias por tu compra! Nos pondremos en contacto contigo pronto.');
    });
});

// 2. Botón de "Ver Productos" en la portada
const botonVerProductos = document.querySelector('.portada button');
botonVerProductos.addEventListener('click', () => {
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
});

// 3. Navegación suave al hacer clic en los enlaces del menú
const enlacesMenu = document.querySelectorAll('nav a');

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault();
        const seccion = document.querySelector(enlace.getAttribute('href'));
        seccion.scrollIntoView({ behavior: 'smooth' });
    });
});

// 4. Cambiar el fondo del encabezado al hacer scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = '#333';
    } else {
        header.style.background = 'linear-gradient(90deg, #1e3c72, #2a5298)';
    }
});

// 5. Mensaje dinámico en el pie de página
const footer = document.querySelector('footer');
const fecha = new Date();
footer.innerHTML = `&copy; ${fecha.getFullYear()} Tienda de PCs. Todos los derechos reservados.`;
