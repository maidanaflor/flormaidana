document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    
    // Alternar menú al hacer clic en el ícono
    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x'); // Cambia el ícono a "X" (requiere Boxicons)
    });
    
    // Cerrar menú al hacer clic en un enlace (opcional)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    });
});