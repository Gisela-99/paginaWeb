// Seleccionamos todas las imágenes
const images = document.querySelectorAll('img');

// Agregamos un evento de click a cada imagen
images.forEach((image) => {
  image.addEventListener('click', () => {
    // Añadimos la clase que inicia la animación infinita
    image.classList.toggle('rotate-infinite');
  });
});
