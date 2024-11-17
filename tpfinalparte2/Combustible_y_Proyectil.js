class Combustible {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
  image(magicFuel, this.x, this.y, 50, 50);

  }

  collected(dastan) {
    let d = dist(this.x, this.y, dastan.x, dastan.y);
    return d < 20;
  }
}

class Projectile {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  move() {
    this.y += this.speed;
  }

  display(type) {
    if (type === 'dagger') {
      image(dagger, this.x, this.y, 50, 50);  
    } else if (type === 'sword') {
      image(sword, this.x, this.y, 50, 50);  
    } else if (type === 'fireball') {
      image(fireball, this.x, this.y, 50, 0); 
    }
  }

  hits(target) {
    // Verificar colisión con el objetivo
    return dist(this.x, this.y, target.x, target.y) < 20;
  }
}
