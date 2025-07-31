document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('ContactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Limpiar errores previos
            document.querySelectorAll('.error-message').forEach(el => el.remove());

            // Validar campos
            const nombre = document.getElementById('Nombre').value.trim();
            const apellido = document.getElementById('Apellido').value.trim();
            const email = document.getElementById('Email').value.trim();
            const telefono = document.getElementById('Telefono').value.trim();
            const mensaje = document.getElementById('Mensaje').value.trim();

            let isValid = true;

            if (nombre === '') {
                showError('Nombre', 'Por favor ingrese su nombre');
                isValid = false;
            }

            if (apellido === '') {
                showError('Apellido', 'Por favor ingrese su apellido');
                isValid = false;
            }

            if (email === '') {
                showError('Email', 'Por favor ingrese su email');
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showError('Email', 'Por favor ingrese un email válido');
                isValid = false;
            }

            if (telefono === '') {
                showError('Telefono', 'Por favor ingrese su teléfono');
                isValid = false;
            } else if (!/^[0-9\s+-]+$/.test(telefono)) {
                showError('Telefono', 'Solo números, + o - permitidos');
                isValid = false;
            }

            if (mensaje === '') {
                showError('Mensaje', 'Por favor ingrese su mensaje');
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    }

    // Botón de WhatsApp
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        ['mouseenter', 'focus'].forEach(event => {
            whatsappBtn.addEventListener(event, function() {
                this.style.transform = 'scale(1.1) translateY(-5px)';
            });
        });

        ['mouseleave', 'blur'].forEach(event => {
            whatsappBtn.addEventListener(event, function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
});

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
    errorElement.setAttribute('aria-live', 'polite');
    input.parentNode.appendChild(errorElement);
    input.focus();
}

document.addEventListener('DOMContentLoaded', function() {
    const workBtn = document.getElementById('workWithUsBtn');
    const workModal = document.getElementById('workModal');
    const closeBtn = document.querySelector('.work-close');
    const cvForm = document.getElementById('cvForm');
    
    // Función para abrir modal
    function openModal() {
        workModal.style.display = 'flex';
        document.body.classList.add('modal-open');
    }
    
    // Función para cerrar modal
    function closeModal() {
        workModal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
    
    // Event listeners
    workBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
    });
    
    closeBtn.addEventListener('click', closeModal);
    
    // Cerrar al hacer clic fuera del contenido
    workModal.addEventListener('click', function(e) {
        if (e.target === workModal) {
            closeModal();
        }
    });
    
    // Manejar envío del formulario
    cvForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí tu lógica de envío
        alert('Formulario enviado con éxito');
        closeModal();
        this.reset();
    });
});