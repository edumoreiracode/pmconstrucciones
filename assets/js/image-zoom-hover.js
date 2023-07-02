// Opcional: Si tienes varias imágenes con el mismo efecto, puedes aplicarlo a todas ellas utilizando un bucle

// Obtener todas las imágenes con la clase "image-zoom"
const images = document.querySelectorAll('.fotos-container__imagen');

// Aplicar el evento de mouseover a cada imagen
images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.2)'; // Ajusta el nivel de zoom según tus necesidades
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)'; // Volver al tamaño original al quitar el puntero del mouse
  });
});
