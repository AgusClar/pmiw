// Alumnas: Clar Agustina Legajo:93551/8, Ailen Avanzini Legajo: 94717/7  // Materia: pmiw // TPFinalParte1 //Comision: 5// FDA // UNLP
//Link Tutorial: https://youtu.be/riWFpIWbWEw

let images = [];
let mysound;
let texts = [];
let titles = [];
let colorTexto = 255; // Color inicial del texto (blanco)
let colorTitulo = 255; // Color inicial del título (blanco)

function preload() {
  // Carga la imagen de la carátula
  let imageIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]; // Incluyendo los índices faltantes
 for (let i = 0; i < imageIndices.length; i++) {
    let index = imageIndices[i];
    images[index] = loadImage('assets/Image' + index + '.png');
  }
  
 texts = loadStrings('assets/Textos.txt');
 titles = loadStrings('assets/Titulos.txt');


soundFormats('mp3');
mySound= loadSound('assets/Song');
}

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, CENTER); // Centra el texto horizontal y verticalmente
  screen= 0;
}

function draw() {
      

    if (screen == 0) { // Carátula
        image(images[0], 0, 0, width, height); // Muestra la imagen de la carátula     
        transparentRect();
        showTitleAndText(texts[0]);
        botones();
    } else if (screen >= 1 && screen <= 8 || screen == 11 || screen == 14 || screen == 15) {
        StoryPant(screen); // Llama a la función para las pantallas que comparten lógica similar
        
    } else if (screen == 9) { // Final 1
        FinalScreen(screen, 19, 9); // Títulos y textos específicos
    } else if (screen == 10) { // Final 2
        FinalScreen(screen, 18, 10); // Títulos y textos específicos
    } else if (screen == 12) { // Final 3
        FinalScreen(screen, 20, 12); // Títulos y textos específicos
    } else if (screen == 13) { // Créditos
        FinalScreen(screen, 22, 13); // Títulos y textos específicos
    } else if (screen == 16) { // Final 4
        FinalScreen(screen, 21, 16); // Títulos y textos específicos
    }
}

// Función para mostrar título y texto de cada pantalla

function showTitleAndText(title, body) {
  fill(colorTitulo);
  textSize(24); // Tamaño del título
  textStyle(BOLD); // Negrita para el título
  text(title, width / 2, 50); // Título centrado
  
  fill(colorTexto); // Usa el color dinámico del texto
  textSize(18);  // Tamaño del texto
  textStyle(NORMAL); // Estilo normal para el texto
  
  let textY = height / 2 - 50; // Posición Y del texto
  let textWidth = 600; // Ancho máximo para el texto
   
    // Muestra el texto y su posicion
  text(body, 20, textY, textWidth, height - 300);
  
}

function showText(body) {
  fill(colorTexto); 
  textSize(18);  // Tamaño del texto
  textStyle(NORMAL); // Estilo normal para el texto
  
  let textY = height / 2 - 50; // Posición Y del texto
  let textWidth = 600; // Ancho máximo para el texto
   
    // Muestra el texto y su posicion
  text(body, 20, textY, textWidth, height - 300);
  
}

// Función para cambiar los colores del texto
function keyPressed() {
  if (key == 'b' || key == 'B') {
    colorTexto = color(255); // Cambia el color del texto a blanco
    colorTitulo = color(255); // Cambia el color del título a blanco
  } else {
    colorTexto = color(random(255), random(255), random(255)); // Color aleatorio para el texto
    colorTitulo = color(random(255), random(255), random(255)); // Color aleatorio para el título
  }
}

function transparentRect(){
  fill(0, 100); // Color negro con opacidad de 100
  rectMode(CORNER);
  rect(0, 0, width, height);
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

function botones() {
  stroke(0);
  fill(255);

  switch (screen) {
    case 0:
      textoBtn1 = titles[0];
      textoBtn2 = titles[1];
      break;
    case 1:
      textoBtn1 = titles[2];
      textoBtn2 = null;
      break;
    case 2:
      textoBtn1 = titles[3];
      textoBtn2 = titles[4];
      break;
    case 3:
      textoBtn1 = titles[5];
      textoBtn2 = null;
      break;
    case 4:
      textoBtn1 = titles[6];
      textoBtn2 = titles[7];
      break;
    case 5:
      textoBtn1 = titles[8];
      textoBtn2 = titles[9];
      break;
    case 6:
      textoBtn1 = titles[10];
      textoBtn2 = null;
      break;
    case 7:
      textoBtn1 = titles[11];
      textoBtn2 = null;
      break;
    case 8:
      textoBtn1 = titles[12];
      textoBtn2 = null;
      break;
case 9:
      textoBtn1 = titles[16]
      textoBtn2 = titles[17]
      break;
case 10:
      textoBtn1 = titles[16]
      textoBtn2 = titles[17]
      break;
    case 11:
      textoBtn1 = titles[13];
      textoBtn2 = null;
      break;
case 12:
      textoBtn1 = titles[16]
      textoBtn2 = titles[17]
      break;
case 13:
      textoBtn1 = titles[16]
      textoBtn2 = titles[17]
      break;
    case 14:
      textoBtn1 = titles[14];
      textoBtn2 = null;
      break;
    case 15:
      textoBtn1 = titles[15];
      textoBtn2 = null;
      break;
case 16:
      textoBtn1 = titles[16]
      textoBtn2 = titles[17]
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
