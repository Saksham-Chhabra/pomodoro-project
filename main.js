let timer;
let timeLeft = 1500; // Default: 25 minutes

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("time").textContent = `${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  clearTimeout(timer); // Clear previous timer
  updateTimer();

  function countdown() {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
      timer = setTimeout(countdown, 1000);
    } else {
      alert("Timer completed!");
    }
  }

  countdown();
}

function resetTimer() {
  clearTimeout(timer);
  timeLeft = 1500; // Reset to 25 minutes
  updateTimer();
}

function startPomodoro() {
  timeLeft = 1500; // 25 minutes
  startTimer();
}

function startShortBreak() {
  timeLeft = 300; // 5 minutes
  startTimer();
}

function startLongBreak() {
  timeLeft = 900; // 15 minutes
  startTimer();
}
