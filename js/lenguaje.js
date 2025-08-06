// Diccionario de traducciones
const translations = {
    es: {
        // Menú
        "logo-text": "Diseño y desarrollo digital que impulsa tu marca",
        "home": "Inicio",
        "education": "Educación",
        "services": "Servicios",
        "contact": "Contacto",
        
        // Sección Home
        "welcome": "Hola, soy Flor!",
        "description": " Me apasiona crear sitios atractivos, funcionales y fáciles de usar, que reflejen la identidad de cada marca. Trabajo con HTML, CSS y JavaScript, siempre buscando combinar creatividad y tecnología para que cada proyecto no solo se vea bien, sino que funcione de forma eficiente. Además, como Community Manager, gestiono redes sociales de manera estratégica, creando contenido visual y mensajes que conectan con la audiencia, fortalecen la presencia online y generan resultados reales. Estoy en constante aprendizaje, actualizándome en diseño, tendencias digitales y herramientas de comunicación para ofrecer soluciones integrales, modernas y efectivas",
        "contact-btn": "Contacto",
        
        // Sección Educación
        "education-title": "Educación",
        "marketing": "Marketing Digital",
        "marketing-desc": "Planificación y ejecución de estrategias digitales orientadas a aumentar la visibilidad de marcas, atraer clientes y mejorar la comunicación online. Gestión de contenido, redes sociales, campañas y análisis de métricas para optimizar resultados",
        "uiux": "UI/UX Designer",
        "uiux-desc": "Diseñadora UI/UX en formación, enfocada en crear experiencias visuales atractivas y funcionales. Apasionada por el diseño centrado en el usuario, la accesibilidad y la usabilidad para desarrollar soluciones intuitivas y efectivas.",
        "frontend": "Desarrollador Front End",
        "frontend-desc": "Desarrolladora front-end con experiencia en sitios web dinámicos y atractivos. Dominio de HTML, CSS y JavaScript para diseños responsivos y navegación intuitiva. Conocimiento en herramientas y frameworks modernos para mejorar la interacción y el rendimiento web.",
        "electronics": "Técnica en electronica",
        "electronics-desc": "Técnico en Electrónica con experiencia en programación de microcontroladores y sistemas embebidos. Conocimientos en C y Arduino para el desarrollo y optimización de soluciones electrónicas",
        
        // Sección Servicios
        "services-title": "Servicios",
        "frontend-service": "Desarrollo Front-End",
        "frontend-service-desc": "Diseño y desarrollo de interfaces web interactivas utilizando HTML, CSS y JavaScript, con enfoque en la creación de experiencias de usuario optimizadas, accesibles y visualmente atractivas para todo tipo de dispositivos.",
        "responsive": "Diseño Web Responsivo y Personalizado",
        "responsive-desc": "Creación de sitios web adaptables a cualquier dispositivo, con un diseño único y personalizado que mejora la usabilidad y la interacción. Aseguro que cada página funcione correctamente en todos los tamaños de pantalla.",
        "uiux-service": "Diseño y Optimización UI/UX",
        "uiux-service-desc": "Mejora de la experiencia de usuario y la interfaz de aplicaciones web y móviles, aplicando principios de diseño centrados en el usuario para crear soluciones intuitivas, accesibles y atractivas.",
        "social": "Configuración de Redes Sociales",
        "social-desc": "Establecimiento y optimización de perfiles en plataformas sociales, creando una identidad visual coherente y profesional que refuerza la marca y conecta eficazmente con la audiencia objetivo.",
        
        // Sección Contacto
        "contact-title": "Hagamos tu idea realidad!",
        "name": "Nombre",
        "lastname": "Apellido",
        "email": "Correo electrónico",
        "phone": "Teléfono",
        "message": "Mensaje",
        "submit": "Enviar"
    },
    en: {
        // Menú
        "logo-text": "Digital design and development that boosts your brand",
        "home": "Home",
        "education": "Education",
        "services": "Services",
        "contact": "Contact",
        
        // Sección Home
        "welcome": "Hi, I'm Flor!",
        "description": "I am passionate about creating attractive, functional, and user-friendly websites that reflect each brand's identity. I work with HTML, CSS, and JavaScript, always seeking to combine creativity and technology so that each project not only looks good but also functions efficiently. Additionally, as a Community Manager, I strategically manage social media, creating visual content and messages that connect with the audience, strengthen online presence, and generate real results. I am constantly learning and updating my knowledge of design, digital trends, and communication tools to offer comprehensive, modern, and effective solutions.",
        "contact-btn": "Contact",
        
        // Sección Educación
        "education-title": "Education",
        "marketing": "Digital Marketing",
        "marketing-desc": "Planning and execution of digital strategies aimed at increasing brand visibility, attracting customers, and improving online communication. Content management, social media, campaigns, and metrics analysis to optimize results.",
        "uiux": "UI/UX Designer",
        "uiux-desc": "UI/UX designer in training, focused on creating attractive and functional visual experiences. Passionate about user-centered design, accessibility, and usability to develop intuitive and effective solutions.",
        "frontend": "Front End Developer",
        "frontend-desc": "Front-end developer with experience in dynamic and attractive websites. Proficiency in HTML, CSS, and JavaScript for responsive designs and intuitive navigation. Knowledge of modern tools and frameworks to improve web interaction and performance.",
        "electronics": "Electronics Technician",
        "electronics-desc": "Electronics technician with experience in microcontroller programming and embedded systems. Knowledge of C and Arduino for the development and optimization of electronic solutions",
        
        // Sección Servicios
        "services-title": "Services",
        "frontend-service": "Front-End Development",
        "frontend-service-desc": "Design and development of interactive web interfaces using HTML, CSS, and JavaScript, with a focus on creating optimized, accessible, and visually appealing user experiences for all types of devices.",
        "responsive": "Responsive and Custom Web Design",
        "responsive-desc": "Creation of websites adaptable to any device, with a unique and personalized design that improves usability and interaction. I ensure that each page works correctly on all screen sizes..",
        "uiux-service": "UI/UX Design and Optimization",
        "uiux-service-desc": "Improving the user experience and interface of web and mobile applications by applying user-centered design principles to create intuitive, accessible, and attractive solutions.",
        "social": "Social Media Setup",
        "social-desc": "Establishment and optimization of profiles on social media platforms, creating a consistent and professional visual identity that reinforces the brand and effectively connects with the target audience.",
        
        // Sección Contacto
        "contact-title": "Let's make your idea a reality!",
        "name": "Name",
        "lastname": "Last Name",
        "email": "Email",
        "phone": "Phone",
        "message": "Message",
        "submit": "Submit"
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    // Cambiar atributo lang del HTML
    document.documentElement.lang = lang;
    
    // Guardar preferencia en localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Traducir todos los elementos con clase 'tr'
    document.querySelectorAll('.tr').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Traducir placeholders y labels del formulario
    const formLabels = {
        'Nombre': 'name',
        'Apellido': 'lastname',
        'Correo electrónico': 'email',
        'Teléfono': 'phone',
        'Mensaje': 'message',
        'Enviar': 'submit'
    };
    
    Object.entries(formLabels).forEach(([original, key]) => {
        const elements = document.querySelectorAll(`[for="${original}"], [placeholder="${original}"]`);
        elements.forEach(el => {
            if (translations[lang] && translations[lang][key]) {
                el.textContent ? el.textContent = translations[lang][key] : el.placeholder = translations[lang][key];
            }
        });
    });
}

// Event listeners para los botones de idioma
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Cargar idioma guardado al iniciar
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(savedLang);
});