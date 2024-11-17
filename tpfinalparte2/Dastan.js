class Dastan {
  constructor() {
    this.x = width / 2;
    this.y = height - 50;
    this.speed = 5;
  }

  move() {
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x < width - 50) { 
      this.x += this.speed;
    }
    if (keyIsDown(UP_ARROW) && this.y > 0) {
      this.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW) && this.y < height - 50) { // Limitacion de movimientos
      this.y += this.speed;
    }
  }

  display() {
    image(blueRug, this.x, this.y, 100, 100); 
  }
}
