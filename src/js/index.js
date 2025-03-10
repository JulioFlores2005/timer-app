// js/index.js
import '../scss/styles.scss';
import Timer from './modules/Timer';

const timer = new Timer();

document.querySelector('#start-btn').addEventListener('click', () => timer.start());
document.querySelector('#pause-btn').addEventListener('click', () => timer.stop());
document.querySelector('#reset-btn').addEventListener('click', () => timer.reset());
document.querySelector('#up-btn').addEventListener('click', () => timer.increaseTime());
document.querySelector('#down-btn').addEventListener('click', () => timer.decreaseTime());