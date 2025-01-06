let timerInterval;
let elapsedTime = 0;

export function setupTimer() {
    const elapsedTimeElement = document.getElementById('elapsed-time');
    const remainingTimeElement = document.getElementById('remaining-time');

    let remainingTime = 60; // Starttijd van 60 seconden

    // Update de tijd elke seconde
    timerInterval = setInterval(() => {
        elapsedTime++;
        remainingTime--;

        elapsedTimeElement.textContent = `${elapsedTime}s`;
        remainingTimeElement.textContent = `${remainingTime}s`;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            alert("Tijd is om!");
        }
    }, 1000);
}

export function stopTimer() {
    clearInterval(timerInterval);
}
