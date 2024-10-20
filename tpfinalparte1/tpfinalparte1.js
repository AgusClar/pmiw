 let images = [];
let mysound;

function preload() {
  // Carga la imagen de la carátula
  let imageIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16]; // Incluyendo los índices faltantes
 for (let i = 0; i < imageIndices.length; i++) {
    let index = imageIndices[i];
    images[index] = loadImage('assets/Image' + index + '.png');
  }

soundFormats('mp3');
mySound= loadSound('assets/Song');
}

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, CENTER); // Centra el texto horizontal y verticalmente
  screen= 0;
}

function draw() {
  background(220); // Fondo gris claro
  fill(0);       // Texto Color Negro   
  
      if ( screen == 0 ) { // Carátula
   image(images[0], 0, 0, width, height); // Muestra la imagen de la carátula
      textSize(24);
      textStyle(BOLD); // Texto en negrita para el título
      text("El Príncipe de Persia", width / 2, 50); // Título centrado
      textSize(18);
      textStyle(NORMAL); // Restablece estilo normal
        botones();        

  } else if ( screen == 1 ) {      // Introducción
     image(images[1], 0, 0, width, height); // Muestra la imagen 1
     showTitleAndText( "Introducción", "En un antiguo reino persa, el joven príncipe Dastan es adoptado por el rey. Durante una misión, Dastan y su hermano Garsiv asaltan la ciudad de Alamut, creyendo que sus habitantes son traidores."
      );
      botones();
  }

  else if ( screen == 2 ) {   // Descubrimiento
    image(images[2], 0, 0, width, height); // Muestra la imagen 2
      showTitleAndText( "Descubrimiento", "Mientras explora, Dastan encuentra una Daga mística que le permite retroceder en el tiempo."
      );
     botones();
    }  

    else if ( screen == 3 ) { // Salvando a alguien
      image(images[3], 0, 0, width, height); // Muestra la imagen 3
      showTitleAndText( "Salvando a alguien", "Dastan usa la Daga para salvar a una joven de ser ejecutada. La joven se presenta como Tamina y le revela la verdadera historia: Alamut no es traidor y quien realmente es el traidor."
      );
   botones();
       } 

   else if ( screen == 4 ) {  // Descubriendo la clave
   image(images[4], 0, 0, width, height); // Muestra la imagen 4
      showTitleAndText( "Descubriendo la clave", "Dastan y Tamina descubren que la Daga es la clave para detener al verdadero traidor."
      );
     botones(); 
      } 

   else if ( screen == 5 ) {  // Ocultando la Daga
     image(images[5], 0, 0, width, height); // Muestra la imagen 5
      showTitleAndText( "Ocultando la Daga", "Dastan siente que ha tomado una decisión arriesgada al ocultar la Daga ya que descubrió que Alamut no había cometido traición."
      );
     botones();
      } 

  else if ( screen == 6 ) { // Alianza
  image(images[6], 0, 0, width, height); // Muestra la imagen 6
      showTitleAndText( "Alianza", "Dastan conoce a Tamina en Alamut y se unen para desentrañar el complot que amenaza al reino. Sin embargo, se enfrentan a la traición de un noble."
      );
    botones();
       } 

    else if ( screen == 7 ) { // Huida Solitaria
      image(images[7], 0, 0, width, height); // Muestra la imagen 7
      showTitleAndText( "Huida Solitaria", "Dastan escapa solo y se encuentra con guerreros del desierto. Ellos le cuentan quien es el traidor y Dastan decide enfrentarlo."
      );
      botones();
      } 

    else if ( screen == 8 ) { // El Viejo Sabio
    image(images[8], 0, 0, width, height); // Muestra la imagen 8
      showTitleAndText( "El Viejo Sabio", " A Dastan le presentan a un sabio que le advierte sobre las consecuencias de sus acciones. Debe decidir cómo actuar.");
     botones(); 
    } 

   else if ( screen == 9 ) { // (Final 1)
   image(images[9], 0, 0, width, height); // Muestra la imagen 9
      showTitleAndText( "Final: 1", "Dastan se enfrenta al traidor pero pierde la batalla, y el traidor logra conseguir la Daga y conquistar el reino."
      );
    botonesFinales(); 
    stopSound();
       } 

 else if ( screen == 10 ) { // Final 2
 image(images[10], 0, 0, width, height); // Muestra la imagen 10
      showTitleAndText( "Final 2", "Dastan derrota al traidor con la daga, asegurando la paz en el reino y destruyendo la Daga."
      );
      botonesFinales();
      stopSound();
            }

  else if ( screen == 11 ) { //Cambiando el Destino 
  image(images[11], 0, 0, width, height); // Muestra la imagen 11
      showTitleAndText( "Final 2", "Dastan utiliza la Daga para cambiar su destino, salvando a Alamut, a sí mismo y a su familia."
      );
       botones();
  }

   else if ( screen == 12 ) { // Final 3
     image(images[12], 0, 0, width, height); 
    showTitleAndText( "Final 3", "Gracias a sus esfuerzos, Tamina la princesa de Alamut le agradece besandolo."
      );
      botonesFinales(); 
      stopSound();
   }

   else if ( screen == 13 ) { // Créditos
      image(images[13], 0, 0, width, height); 
      showTitleAndText("Créditos", "Alumnas y Desarrolladoras: Clar Agustina y Avanzini Ailen. \n Creadora de Imagenes: Dall-e IA");
      botonesFinales();
      stopSound();
   }

    else if ( screen == 14 ) { // Dolorosa desición
    image(images[14], 0, 0, width, height); // Muestra la imagen 14
      showTitleAndText( "Dolorosa desición", "Tamina se ofrece como esposa al traidor con la condicion que deje a Dastan y a su familia en Paz y que Alamut pueda prosperar"
      );
     botones();
    }

  else if ( screen == 15 ) { //Boda Indeseada
  image(images[15], 0, 0, width, height); // Muestra la imagen 15
      showTitleAndText( "Boda Indeseada", "Tamina y el traidor se casan en esta boda indeseada y promete dejar a Alamut y Dastan en Paz."
      );
       botones(); 
       }

   else if ( screen == 16 ) { // Final 4
   image(images[16], 0, 0, width, height); // Muestra la imagen 16
      showTitleAndText( "Final 4", "El traidor mata a Tamina para ser el unico gobernante de ambos reinos, Dastan lamenta la perdida de su amor"
      );
      botonesFinales(); 
      stopSound();
   }
}

// Función para mostrar título y texto de cada pantalla

function showTitleAndText(title, body) {
  fill(255);
  textSize(24); // Tamaño del título
  textStyle(BOLD); // Negrita para el título
  text(title, width / 2, 50); // Título centrado
  
  textSize(18);  // Tamaño del texto
  textStyle(NORMAL); // Estilo normal para el texto
  
  let textY = height / 2 - 50; // Posición Y del texto
  let textWidth = 600; // Ancho máximo para el texto
   
    // Muestra el texto y su posicion
  text(body, 20, textY, textWidth, height - 300);
  
}

function stopSound() {
  // Detener el sonido al llegar a los finales
   if (mySound.isPlaying()) {
       mySound.stop();
   } }

function mousePressed() {
  mySound.play();
}

function mouseClicked() {
  let btn1X = width / 2 - 100;
  let btn1Y = height - 100;
  let btnWidth = 200;
  let btnHeight = 40;

  let btn2X = width / 2 - 100;
  let btn2Y = height - 60;
  let btn2Width = 200;
  let btn2Height = 40;

  // Botón 1
  if (mouseX >= btn1X && mouseX <= btn1X + btnWidth && mouseY >= btn1Y && mouseY <= btn1Y + btnHeight) {
    switch (screen) {
      case 0:  screen = 1;   break;
      case 1:  screen = 2;   break;
      case 2:  screen = 3;   break;
      case 3:  screen = 4;   break;
      case 4:  screen = 10;   break;
      case 5:  screen = 6;   break;
      case 6:  screen = 14;   break;
      case 7:  screen = 8;   break;
      case 8:  screen = 11;   break;
      case 11: screen = 12;   break;
      case 14: screen = 15;   break;
      case 15: screen = 16;   break;
      case 9: case 10: case 12: case 13: case 16:
        screen = 0; // Vuelve a la caratula
        break;
    }
  }

  // Botón 2
  if (mouseX >= btn2X && mouseX <= btn2X + btn2Width && mouseY >= btn2Y && mouseY <= btn2Y + btn2Height) {
    switch (screen) {
      case 0: screen = 13;  break;
      case 2: screen = 5;   break;
      case 4: screen = 9;  break;
      case 5: screen = 7;   break;
      case 9: case 10: case 12: case 13: case 16:
        screen = 1; // Vuelve al Inicio
        break;
    }
  }
}



function botonesFinales() {
  stroke(0);
  fill(255);

  // Botón para volver a la carátula
  rect(width / 2 - 100, height - 100, 200, 40);
  fill(0);
  text("Carátula", width / 2, height - 80);

  // Botón para volver al inicio de la aventura
  fill(255);
  rect(width / 2 - 100, height - 60, 200, 40);
  fill(0);
  text("Inicio", width / 2, height - 40);
}

function botones() {
  stroke(0);
  fill(255);

  switch (screen) {
    case 0:
      textoBtn1 = "Comenzar";
      textoBtn2 = "Créditos";
      break;
    case 1:
      textoBtn1 = "Explorar la ciudad";
      textoBtn2 = null;
      break;
    case 2:
      textoBtn1 = "Salvar a alguien";
      textoBtn2 = "Ocultar la Daga";
      break;
    case 3:
      textoBtn1 = "Viajar juntos al futuro";
      textoBtn2 = null;
      break;
    case 4:
      textoBtn1 = "Usar la daga";
      textoBtn2 = "No usar la daga";
      break;
    case 5:
      textoBtn1 = "Regresar a Alamut";
      textoBtn2 = "Huir al desierto";
      break;
    case 6:
      textoBtn1 = "Tamina se casa";
      textoBtn2 = null;
      break;
    case 7:
      textoBtn1 = " Dastan Reflexiona";
      textoBtn2 = null;
      break;
    case 8:
      textoBtn1 = "Escuchar al sabio";
      textoBtn2 = null;
      break;
    case 11:
      textoBtn1 = "Reclamar el Trono";
      textoBtn2 = null;
      break;
    case 14:
      textoBtn1 = "El traidor acepta";
      textoBtn2 = null;
      break;
    case 15:
      textoBtn1 = "¿Felices para Siempre?";
      textoBtn2 = null;
      break;
  }

  // Botón 1
  rect(width / 2 - 100, height - 100, 200, 40);
  fill(0);
  text(textoBtn1, width / 2, height - 80);

  // Botón 2 (solo si está definido)
  if (textoBtn2) {
    fill(255);
    rect(width / 2 - 100, height - 60, 200, 40);
    fill(0);
    text(textoBtn2, width / 2, height - 40);
  }
}
