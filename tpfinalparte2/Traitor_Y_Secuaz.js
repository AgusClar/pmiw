class Traitor {
  constructor() {
    this.x = width / 2;
    this.y = 50;
    this.speed = 2;
    this.aparecido = false; // Inicialmente el traidor no aparece
  }

  aparecer() {
    this.aparecido = true; // Cuando se llame a este método, el traidor aparecerá
  }

  move() {
    if (this.aparecido) {  // Solo mueve al traidor si ha aparecido
      this.x += this.speed;
      if (this.x > width || this.x < 0) this.speed *= -1;
    }
  }

  display() {
    if (this.aparecido) {
  image(redRug, this.x, this.y, 100, 100);
    }
  }

  shoot() {
    if (this.aparecido && frameCount % 60 === 0) {
      let projectile = new Projectile(this.x, this.y, 5);
      juego.traitorProjectiles.push(projectile);
    }
  }
}

class Secuaz {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2;
  }

  move() {
    this.y += this.speed;
    if (this.y > height / 2 || this.y < 0) this.speed *= -1;
  }

  display() {
  image(minion, this.x, this.y, 30, 50); 
  }

  shoot() {
    if (frameCount % 90 === 0) {
      let projectile = new Projectile(this.x, this.y, 5);
      juego.secuazProjectiles.push(projectile);
    }
  }
}
