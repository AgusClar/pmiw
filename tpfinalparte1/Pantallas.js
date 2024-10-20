// Funcion para Pantallas 1/2/3/4/5/6/7/8/11/14/15

function StoryPant(screen) {
    
 image(images[screen], 0, 0, width, height); // Muestra la imagen (indice) según su pantalla
     transparentRect();
     showText(texts[screen]);
      botones();
  }
  
// Función para las pantallas finales y créditos
function FinalScreen(screen, titleIndex, textIndex) {
    image(images[screen], 0, 0, width, height); // Muestra la imagen según su pantalla
    showTitleAndText(titles[titleIndex], texts[textIndex]); // Usar índices específicos
    botones();
    stopSound();
}
