// js/modules/Timer.js
export default class Timer {
  constructor() {
      this.time = 0; // Tiempo en segundos
      this.interval = null;
      this.display = document.getElementById('timer-display');
      this.isRunning = false;

      // Cargar el sonido de alerta
      this.alertSound = new Audio('../../assets/sounds/alert-sound.mp3');
  }

  /**
   * Inicia el temporizador.
   */
  start() {
      if (!this.isRunning && this.time > 0) {
          this.isRunning = true;
          this.interval = setInterval(() => {
              if (this.time > 0) {
                  this.time -= 1;
                  this.updateDisplay();
              } else {
                  this.stop();
                  this.playAlertSound(); // Reproducir sonido de alerta
                  alert("Time's up!");
              }
          }, 1000);
      }
  }

  /**
   * Detiene el temporizador.
   */
  stop() {
      clearInterval(this.interval);
      this.isRunning = false;
  }

  /**
   * Reinicia el temporizador.
   */
  reset() {
      this.stop();
      this.time = 0;
      this.updateDisplay();
  }

  /**
   * Aumenta el tiempo en 1 minuto.
   */
  increaseTime() {
      this.time += 60;
      this.updateDisplay();
  }

  /**
   * Disminuye el tiempo en 1 minuto.
   */
  decreaseTime() {
      if (this.time >= 60) {
          this.time -= 60;
          this.updateDisplay();
      }
  }

  /**
   * Actualiza la pantalla del temporizador.
   */
  updateDisplay() {
      this.display.textContent = this.formatTime(this.time);
  }

  /**
   * Formatea el tiempo en HH:MM:SS.
   * @param {number} seconds - Tiempo en segundos.
   * @returns {string} - Tiempo formateado.
   */
  formatTime(seconds) {
      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return [hrs, mins, secs]
          .map(v => v.toString().padStart(2, '0'))
          .join(':');
  }

  /**
   * Reproduce el sonido de alerta.
   */
  playAlertSound() {
      this.alertSound.play();
  }
}