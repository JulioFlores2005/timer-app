import Timer from '../js/modules/Timer';

describe('Timer Class', () => {
  let timer;

  beforeEach(() => {
    timer = new Timer();
    document.body.innerHTML = '<div id="timer-display"></div>';
  });

  test('formats time correctly', () => {
    expect(timer.formatTime(3661)).toBe('01:01:01');
    expect(timer.formatTime(59)).toBe('00:00:59');
    expect(timer.formatTime(3600)).toBe('01:00:00');
  });

  test('starts and updates time', () => {
    jest.useFakeTimers();
    timer.start();
    jest.advanceTimersByTime(3000);
    expect(timer.time).toBe(3);
  });
});
