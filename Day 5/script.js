let hours = 0, minutes = 0, seconds = 0, timer = null;

// Format function to show 2-digit time (e.g. 01, 09)
function format(num) {
  return String(num).padStart(2, "0");
}

// Update the timer display
function updateDisplay() {
  document.getElementById("display").innerText =
    `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

// Start the timer
function startTimer() {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 1000);
}

// Stop the timer
function stopTimer() {
  clearInterval(timer);
  timer = null;
}

// Reset the timer
function resetTimer() {
  stopTimer(); // Stop if running
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay(); // Reset the display
}
