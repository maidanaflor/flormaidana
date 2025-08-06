// js/loaders.js

document.addEventListener('DOMContentLoaded', function() {
  // Función para ocultar los loaders
  function hideLoaders() {
    const loaderContainer = document.querySelector('.loader-container');
    if (loaderContainer) {
      // Añade la clase para iniciar la animación de desvanecimiento
      loaderContainer.classList.add('hidden');
      
      // Elimina el contenedor después de que termine la animación
      setTimeout(() => {
        loaderContainer.remove();
      }, 500); // 500ms = duración de la transición CSS
    }
  }

  // Ocultar los loaders cuando la página esté completamente cargada
  window.addEventListener('load', function() {
    // Mostrar los loaders por al menos 2 segundos (para mejor experiencia)
    setTimeout(hideLoaders, 2000);
  });

  // Opcional: Ocultar los loaders si la carga tarda demasiado (10 segundos máximo)
  setTimeout(hideLoaders, 10000);
});