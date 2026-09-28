let totalSeconds = 25 * 60;
let timerInterval = null;
let isRunning = false;

const display = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  display.textContent =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function tick() {
  if (totalSeconds <= 0) {
    clearInterval(timerInterval);
    isRunning = false;
    display.textContent = "Done!";
    return;
  }
  totalSeconds--;
  updateDisplay();
}

startBtn.addEventListener('click', () => {
  if (isRunning) return;
  isRunning = true;
  timerInterval = setInterval(tick, 1000);
});

pauseBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  isRunning = false;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  isRunning = false;
  totalSeconds = 25 * 60;
  updateDisplay();
});

updateDisplay();
const chooseButtons = document.querySelectorAll('.choose-btn');

chooseButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Reset all cards/buttons first
    document.querySelectorAll('.price-card').forEach(card => {
      card.classList.remove('selected');
    });
    chooseButtons.forEach(b => {
      b.classList.remove('selected');
      b.textContent = 'Choose';
    });

    // Mark this one as selected
    const card = btn.closest('.price-card');
    card.classList.add('selected');
    btn.classList.add('selected');
    btn.textContent = `✓ ${btn.dataset.plan} Selected`;
  });
});