// Clase principal del juego
class Juego {
  constructor() {
    this.mainScreen = new MainScreen();
    this.botones = new Botones(this.mainScreen);
    this.dastanLives = 3;
    this.traitorLives = 3;
    this.secuacesLives = 1;
    this.combustible = 100;
    this.riverWidth = 640;
    this.dastanProjectiles = [];
    this.traitorProjectiles = [];
    this.secuazProjectiles = [];
// Temporizador para la generación de combustible
    this.fuelSpawnTime = 200; // Intervalo para generar combustible
    this.fuelTimer = this.fuelSpawnTime;

  }

  setup() {
    dastan = new Dastan();
    traitor = new Traitor();
    this.spawnSecuaces();
    this.spawnCombustibles();
  }

  draw() {
    this.mainScreen.draw();
  }

  updateGame() {
    image(sandBg, 0, 0, width, height);
    fill(0, 100, 255);
  image(riverBg, (width - this.riverWidth) / 2, 0, this.riverWidth, height);

    if (this.riverWidth <= 500 && !traitor.aparecido) {
      traitor.aparecer();
    }

    dastan.move();
    dastan.display();

    if (traitor.aparecido) {
      traitor.move();
      traitor.display();
      traitor.shoot();
    }

    this.updateProjectiles();
    this.updateSecuaces();
    this.updateCombustible();
    this.updateFuelCollection();
    this.handleFuelSpawn();      // Controla la generación de combustible

    this.riverWidth -= 0.1;

    fill(0, 0, 0);
    textSize(16);
    text('Vidas Dastan: ' + this.dastanLives, 65, 20);
    text('Vidas Traitor: ' + this.traitorLives, 65, 60);
    text('Combustible: ' + this.combustible.toFixed(0), 65, 40);
  }

  handleFuelSpawn() {
    // Control del temporizador para la generación de combustible
    this.fuelTimer--;
    if (this.fuelTimer <= 0) {
      this.spawnCombustible();
      this.fuelTimer = this.fuelSpawnTime; // Reinicia el temporizador
    }
  }

  spawnCombustible() {
    // Genera un nuevo objeto combustible en una posición aleatoria
    combustibles.push(new Combustible(random(100, width - 100), random(50, height - 100)));
  }

  updateFuelCollection() {
    for (let i = combustibles.length - 1; i >= 0; i--) {
      let fuel = combustibles[i];
      fuel.display();
      if (fuel.collected(dastan)) {
        this.combustible += 20;
        combustibles.splice(i, 1);
      }
    }

    // Si todos los combustibles han sido recolectados, reinicia el temporizador
    if (combustibles.length === 0) {
      this.fuelTimer = this.fuelSpawnTime;
    }
  }
  
updateProjectiles() {
  // Actualizar y mostrar proyectiles de Dastan
    for (let i = this.dastanProjectiles.length - 1; i >= 0; i--) {
      let projectile = this.dastanProjectiles[i];
      projectile.move();
      projectile.display('dagger');

      // Verificar colisión con el traidor
      if (traitor.aparecido && projectile.hits(traitor)) {
        this.traitorLives--;
        this.dastanProjectiles.splice(i, 1);
        if (this.traitorLives <= 0) this.mainScreen.gameState = "Ganaste";
        continue;
      }

      // Eliminar proyectiles que salen de la pantalla
      if (projectile.y < 0) {
        this.dastanProjectiles.splice(i, 1);
      }
    }
    
     // Actualizar y mostrar proyectiles del traidor
    for (let i = this.traitorProjectiles.length - 1; i >= 0; i--) {
      let projectile = this.traitorProjectiles[i];
      projectile.move();
      projectile.display('sword');

      // Verificar colisión con Dastan
      if (projectile.hits(dastan)) {
        this.dastanLives--;
        this.traitorProjectiles.splice(i, 1);
        if (this.dastanLives <= 0) this.mainScreen.gameState = "Perdiste";
        continue;
      }

      // Eliminar proyectiles que salen de la pantalla
      if (projectile.y > height) {
        this.traitorProjectiles.splice(i, 1);
      }
    }
  }
  
  updateSecuaces() {
  // Mover y actualizar secuaces
  if (traitor.aparecido) {
    return;  // No actualiza ni genera secuaces
  }
  for (let i = secuaces.length - 1; i >= 0; i--) {
    let secuaz = secuaces[i];
    secuaz.move();
    secuaz.display();
    secuaz.shoot();

    // Verificar colisión con proyectiles de Dastan
    for (let j = this.dastanProjectiles.length - 1; j >= 0; j--) {
      let projectile = this.dastanProjectiles[j];
      if (projectile.hits(secuaz)) {
        secuaces.splice(i, 1); // Eliminar secuaz
        this.dastanProjectiles.splice(j, 1); // Eliminar proyectil
        break;
      }
    }
  }

  // Mover y mostrar proyectiles de secuaces
  for (let i = this.secuazProjectiles.length - 1; i >= 0; i--) {
    let projectile = this.secuazProjectiles[i];
    projectile.move();
    projectile.display('fireball');

    // Verificar colisión con Dastan
    if (projectile.hits(dastan)) {
      this.dastanLives--;
      this.secuazProjectiles.splice(i, 1);
      if (this.dastanLives <= 0) this.mainScreen.gameState = "Perdiste";
      continue;
    }

    // Eliminar proyectiles que salen de la pantalla
    if (projectile.y > height) {
      this.secuazProjectiles.splice(i, 1);
    }
  }

  // Verificar si todos los secuaces han sido eliminados
  if (secuaces.length === 0) {
    // Temporizador antes de regenerar los secuaces
    if (!this.secuaceRespawnTimer) {
      this.secuaceRespawnTimer = frameCount + 120; // Esperar 120 fotogramas (~2 segundos)
    } else if (frameCount >= this.secuaceRespawnTimer) {
      // Regenerar secuaces cuando el temporizador haya terminado
      this.spawnSecuaces();
      this.secuaceRespawnTimer = null; // Reiniciar el temporizador
    }
  }
}

  updateCombustible() {
    this.combustible -= 0.1;
    if (this.combustible <= 0) this.mainScreen.gameState = "Perdiste";
  }

  resetGame() {
    this.dastanLives = 3;
    this.traitorLives = 3;
    this.combustible = 100;
    this.riverWidth = 640;
    this.dastanProjectiles = [];
    this.traitorProjectiles = [];
    this.spawnSecuaces();
    this.spawnCombustibles();
    traitor.aparecido = false;
    this.fuelTimer = this.fuelSpawnTime; // Reinicia el temporizador

  }

spawnSecuaces() {
  let cantidadSecuaces = int(3 + (640 - this.riverWidth) / 100); // Uso de int() para resultado a entero
  secuaces = [];
  for (let i = 0; i < cantidadSecuaces; i++) {
    secuaces.push(new Secuaz(random(100, width - 100), random(50, height / 2)));
  }
}


  spawnCombustibles() {
    combustibles = [];
    for (let i = 0; i < 6; i++) {
      combustibles.push(new Combustible(random(100, width - 100), random(50, height - 100)));
    }
  }
}
