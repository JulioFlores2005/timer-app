export default class Timer {
    constructor() {
      this.time = 0;
      this.interval = null;
      this.display = document.getElementById('timer-display');
    }
  
    start() {
      if (!this.interval) {
        this.interval = setInterval(() => {
          this.time += 1;
          this.updateDisplay();
        }, 1000);
      }
    }
  
    pause() {
      clearInterval(this.interval);
      this.interval = null;
    }
  
    reset() {
      this.pause();
      this.time = 0;
      this.updateDisplay();
    }
  
    updateDisplay() {
      this.display.textContent = this.formatTime(this.time);
    }
  
    formatTime(seconds) {
      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return [hrs, mins, secs]
        .map(v => v.toString().padStart(2, '0'))
        .join(':');
    }
  }
  