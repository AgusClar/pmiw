//Clar Agustina, 93551/8, link video: https://youtu.be/CdEjPThkhZo
let foto;
let ellipseSize;
let ellipseColor;

let originalEllipseSize;
let originalEllipseColor;
let x, y, d;
let reset = false; // Variable para controlar si debe usarse el color original
function preload() {
  foto = loadImage("data/vasarely.jpg.jpg");
}

function setup() {
  createCanvas(800, 400);
  colorMode(RGB);

  originalEllipseSize = 84;
  ellipseSize = originalEllipseSize;

  originalEllipseColor = color(200, 200, 200);
  ellipseColor = originalEllipseColor;

  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0);
  
  stroke(0, 20);
  fill(ellipseColor);
  ellipse(x, y, ellipseSize, ellipseSize);

  image(foto, 0, 0, width / 2, height); 

  // Dibujar cada sección
  dibujarSeccion(width / 2 + 142, width / 2 + 240, 50, height - 250, color(200, 200, 200), color(0, 0, 255), 2, 8); // Sección superior
  dibujarSeccion(width - 161, width - 90, 150, 250, color('#1BBC04'), color('#E08A20'), 8, 2); // Sección derecha
  dibujarSeccion(width - 328, width - 258, 150, 250, color('#1BBC04'), color('#E08A20'), 8, 2); // Sección izquierda
  dibujarSeccion(width / 2 + 142, width / 2 + 239, height - 50, height - 150, color(200, 200, 200), color(0, 0, 255), 2, 8); // Sección inferior
}

function dibujarSeccion(xInicial, xFinal, yInicial, yFinal, colorInicial, colorFinal, columnas, filas) {
  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      x = map(i, 0, columnas - 1, xInicial, xFinal);
      y = map(j, 0, filas - 1, yInicial, yFinal);

      d = dist(mouseX + 100, mouseY + 100, x, y);
      ellipseSize = map(d, 0, width / 2, 80, originalEllipseSize);
      ellipseColor = lerpColor(colorInicial, colorFinal, map(d, 0, width / 2, 0, 1));
 if (reset) {
        ellipseColor = originalEllipseColor;
      } else {
        ellipseColor = lerpColor(colorInicial, colorFinal, map(d, 0, width / 2, 0, 1));
      }
      
      dibujar();
    }
  }
}

function dibujar() {
  fill(ellipseColor);
  ellipse(x, y, ellipseSize, ellipseSize);
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    ellipseSize = originalEllipseSize;
    reset = true;
  } else {
    reset = false; 
  }
}
