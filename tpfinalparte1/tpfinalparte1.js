// Alumnas: Clar Agustina Legajo: 93551/8, Ailen Avanzini Legajo: 94717/7  // Materia: pmiw // TP Final Parte 1 //Comision: 5// FDA // UNLP
//Link Tutorial: https://www.youtube.com/watch?v=riWFpIWbWEw

let images = [];
let mysound;
let texts = [];
let buttonTexts = [];
let colorTexto = 255; // Color inicial del texto (blanco)
let colorTitulo = 255; // Color inicial del título (blanco)


function preload() {
  // Carga la imagenes
 for (let i = 0; i <17; i++) {
    images[i] = loadImage('assets/Image' + i + '.png');
  }
  
 texts = loadStrings('assets/Textos.txt');
 buttonTexts = loadStrings('assets/BotonTextos.txt');


soundFormats('mp3');
mySound= loadSound('assets/Song');
}

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, CENTER); // Centra el texto horizontal y verticalmente
  screen= 0;
  userStartAudio();
  // Inicializa las posiciones de los botones
  btnWidth = 200;
  btnHeight = 40;
  btn1X = width / 2 - 100;
  btn1Y = height - 100;
  btn2X = width / 2 - 100;
  btn2Y = height - 60;
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
        FinalScreen(screen, null, 9); // Títulos y textos específicos
    } else if (screen == 10) { // Final 2
        FinalScreen(screen, null, 10); // Títulos y textos específicos
    } else if (screen == 12) { // Final 3
        FinalScreen(screen, null, 12); // Títulos y textos específicos
    } else if (screen == 13) { // Créditos
        FinalScreen(screen, 22, 13); // Títulos y textos específicos
    } else if (screen == 16) { // Final 4
        FinalScreen(screen, null, 16); // Títulos y textos específicos
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
  
// Función para manejar el click del mouse en los botones
function manejoClickBotones(btnWidth, btnHeight, btn1X, btn1Y, btn2X, btn2Y) {
  // Botón 1
  if (mouseX >= btn1X && mouseX <= btn1X + btnWidth &&
      mouseY >= btn1Y && mouseY <= btn1Y + btnHeight) {
    changePantBtn1();
  }

  // Botón 2
  if (mouseX >= btn2X && mouseX <= btn2X + btnWidth &&
      mouseY >= btn2Y && mouseY <= btn2Y + btnHeight) {
    changePantBtn2();
  }
}

// Función para cambiar pantalla cuando se hace click en el botón 1
function changePantBtn1() {
  switch (screen) {
    case 0:  screen = 1;   break;
    case 1:  screen = 2;   break;
    case 2:  screen = 3;   break;
    case 3:  screen = 4;   break;
    case 4:  screen = 10;  break;
    case 5:  screen = 6;   break;
    case 6:  screen = 14;  break;
    case 7:  screen = 8;   break;
    case 8:  screen = 11;  break;
    case 11: screen = 12;  break;
    case 14: screen = 15;  break;
    case 15: screen = 16;  break;
    case 9: case 10: case 12: case 13: case 16:
      screen = 0; // Vuelve a la carátula
      break;
  }
}

// Función para cambiar pantalla cuando se hace click en el botón 2
function changePantBtn2() {
  switch (screen) {
    case 0: screen = 13;  break;
    case 2: screen = 5;   break;
    case 4: screen = 9;   break;
    case 5: screen = 7;   break;
    case 9: case 10: case 12: case 13: case 16:
      screen = 1; // Vuelve al Inicio
      break;
  }
}

// Llamada principal de eventos
function mouseClicked() {
  manejoClickBotones(200, 40, width / 2 - 100, height - 100, width / 2 - 100, height - 60);
}

// Función para dibujar botones en pantalla
function dibujarBotones(btnWidth, btnHeight, btn1X, btn1Y, btn2X, btn2Y) {
  stroke(0);
  fill(255);

  // Botón 1
  rect(btn1X, btn1Y, btnWidth, btnHeight);
  fill(0);
  textAlign(CENTER, CENTER);
  text(textoBtn1, btn1X + btnWidth / 2, btn1Y + btnHeight / 2); // Texto centrado

  // Botón 2 (solo si está definido)
  if (textoBtn2) {
    fill(255);
    rect(btn2X, btn2Y, btnWidth, btnHeight);
    fill(0);
    text(textoBtn2, btn2X + btnWidth / 2, btn2Y + btnHeight / 2); // Texto centrado
  }
}
function botones() {
  stroke(0);
  fill(255);

  switch (screen) {
    case 0:
      textoBtn1 = buttonTexts[0];
      textoBtn2 = buttonTexts[1];
      break;
    case 1:
      textoBtn1 = buttonTexts[2];
      textoBtn2 = null;
      break;
    case 2:
      textoBtn1 = buttonTexts[3];
      textoBtn2 = buttonTexts[4];
      break;
    case 3:
      textoBtn1 = buttonTexts[5];
      textoBtn2 = null;
      break;
    case 4:
      textoBtn1 = buttonTexts[6];
      textoBtn2 = buttonTexts[7];
      break;
    case 5:
      textoBtn1 = buttonTexts[8];
      textoBtn2 = buttonTexts[9];
      break;
    case 6:
      textoBtn1 = buttonTexts[10];
      textoBtn2 = null;
      break;
    case 7:
      textoBtn1 = buttonTexts[11];
      textoBtn2 = null;
      break;
    case 8:
      textoBtn1 = buttonTexts[12];
      textoBtn2 = null;
      break;
case 9:
      textoBtn1 = buttonTexts[16]
      textoBtn2 = buttonTexts[17]
      break;
case 10:
      textoBtn1 = buttonTexts[16]
      textoBtn2 = buttonTexts[17]
      break;
    case 11:
      textoBtn1 = buttonTexts[13];
      textoBtn2 = null;
      break;
case 12:
      textoBtn1 = buttonTexts[16]
      textoBtn2 = buttonTexts[17]
      break;
case 13:
      textoBtn1 = buttonTexts[16]
      textoBtn2 = buttonTexts[17]
      break;
    case 14:
      textoBtn1 = buttonTexts[14];
      textoBtn2 = null;
      break;
    case 15:
      textoBtn1 = buttonTexts[15];
      textoBtn2 = null;
      break;
case 16:
      textoBtn1 = buttonTexts[16]
      textoBtn2 = buttonTexts[17]
      break;
  } 
 dibujarBotones(200, 40, width / 2 - 100, height - 100, width / 2 - 100, height - 60);
}
