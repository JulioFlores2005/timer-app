import '../scss/styles.scss';
import Timer from './modules/Timer';

const timer = new Timer();

document.querySelector('#start-btn').addEventListener('click', () => timer.start());
document.querySelector('#pause-btn').addEventListener('click', () => timer.pause());
document.querySelector('#reset-btn').addEventListener('click', () => timer.reset());
