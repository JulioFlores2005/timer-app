// js/modules/TimerControls.js
export class TimeControls {
  constructor(rootElement) {
    if (!rootElement) throw new Error('Se requiere elemento raíz');
    this.root = rootElement;
    this.render();
    this.bindEvents();
  }

  bindEvents() {
    this.root.addEventListener('click', (e) => {
      const btn = e.target.closest('.control-btn');
      if (!btn) return;

      const { action, time, amount } = btn.dataset;
      const value = parseInt(time || amount, 10);  // ← Base 10 explícita

      this.emitEvent(action, value);
    });
  }

  emitEvent(action, value) {
    const event = new CustomEvent('timeControl', {
      detail: { action, value },
      bubbles: true,
      composed: true
    });
    this.root.dispatchEvent(event);
  }
}
