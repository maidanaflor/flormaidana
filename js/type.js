// typewriter.js
document.addEventListener('DOMContentLoaded', () => {
  const textos = [
    "Desarrolladora Web ",
    "Community Manager ",
    "Diseñadora UI/UX ",
    "Freelancer Creativa ",
    "Marketing Digital "
  ];

  const animatedText = document.querySelector('.animated-text');
  const cursor = document.querySelector('.cursor');
  
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function typeWriter() {
    if (isPaused) return;

    const currentText = textos[index];
    
    // Escribiendo
    if (!isDeleting && charIndex < currentText.length) {
      animatedText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeWriter, 100); // Velocidad escritura
    } 
    // Borrando
    else if (isDeleting && charIndex > 0) {
      animatedText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeWriter, 50); // Velocidad borrado
    } 
    // Cambiar texto
    else {
      isDeleting = !isDeleting;
      if (!isDeleting) index = (index + 1) % textos.length;
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
        typeWriter();
      }, 1000); // Pausa entre textos
    }
  }

  // Iniciar
  typeWriter();
});