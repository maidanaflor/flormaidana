document.addEventListener("DOMContentLoaded", () => {
    // Elementos del DOM
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("section");

    // Función para alternar el menú móvil
    const toggleMenu = () => {
        navbar.classList.toggle("active");
        menuIcon.classList.toggle("bx-x"); // Cambia el ícono de hamburguesa a X
    };

    // Función para cerrar el menú
    const closeMenu = () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
    };

    // Evento para el ícono del menú
    menuIcon.addEventListener("click", toggleMenu);

    // Eventos para los enlaces del menú
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Solo para enlaces que son anclas internas
            if (link.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = link.getAttribute("href");
                const targetSection = document.querySelector(targetId);
                
                // Desplazamiento suave
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
                
                // Cerrar el menú después de un pequeño retraso
                setTimeout(closeMenu, 300);
            }
            
            // Para enlaces externos, el menú se cierra inmediatamente
            closeMenu();
        });
    });

    // Función para cambiar el enlace activo al hacer scroll
    const changeActiveLink = () => {
        const scrollY = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };

    window.addEventListener("scroll", changeActiveLink);
});

document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".navbar a");

    function changeActiveLink() {
        let scrollY = window.scrollY;

        sections.forEach((section) => {
            let sectionTop = section.offsetTop - 150; 
            let sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                let targetId = section.getAttribute("id");

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${targetId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", changeActiveLink);
});


