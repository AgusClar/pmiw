// Clase que maneja la logica de los botones
class Botones {
  constructor(mainScreen) {
    this.mainScreen = mainScreen;
  }

  handleMousePressed() {
    if (this.mainScreen.gameState === "Inicio") {
      this.handleInicioButtons();
    } else if (this.mainScreen.gameState === "Instrucciones") {
      this.handleInstructionsButtons();
    } else if (this.mainScreen.gameState === "Creditos") {
      this.handleCreditsButtons();
    }
  }

  handleInicioButtons() {
   if (this.mainScreen.checkButtonClick(width / 2 - 100, height - 150, 200, 40)) {
      // Reproduce la canción solo si no se ha reproducido antes
      if (!songStarted) {
        song.loop(); // Reproduce la canción en bucle
        songStarted = true; // Marca que el sonido ha comenzado
      }

      this.mainScreen.gameState = "Juego";
      juego.resetGame();
    } else if (this.mainScreen.checkButtonClick(width / 2 - 100, height - 100, 200, 40)) {
      this.mainScreen.gameState = "Instrucciones";
    } else if (this.mainScreen.checkButtonClick(width / 2 - 100, height - 50, 200, 40)) {
      this.mainScreen.gameState = "Creditos";
    }
  }

  handleInstructionsButtons() {
    if (this.mainScreen.checkButtonClick(width / 2 - 100, height - 50, 200, 40)) {
      this.mainScreen.gameState = "Inicio";
    }
  }

  handleCreditsButtons() {
    if (this.mainScreen.checkButtonClick(width / 2 - 100, height - 50, 200, 40)) {
      this.mainScreen.gameState = "Inicio";
    }
  }
}
