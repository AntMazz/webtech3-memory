// js/timer.js
let timerInterval;
let elapsedTime = 0;

export function setupTimer() {
    const elapsedTimeElement = document.getElementById('elapsed-time');
    const remainingTimeElement = document.getElementById('remaining-time');

    let remainingTime = 60; // Ensure this is set to 30 seconds

    // Clear any existing interval to prevent multiple intervals
    clearInterval(timerInterval);

    // Update the time every second
    timerInterval = setInterval(() => {
        elapsedTime++;
        remainingTime--;

        elapsedTimeElement.textContent = `${elapsedTime}s`;
        remainingTimeElement.textContent = `${remainingTime}s`;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

export function stopTimer() {
    clearInterval(timerInterval);
}