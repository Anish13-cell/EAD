let startTime, updatedTime, difference;
let timerRunning = false;
let interval;

function startStop() {
    if (!timerRunning) {
        startTime = startTime ? Date.now() - difference : Date.now();
        interval = setInterval(updateDisplay, 1000);
        timerRunning = true;
    } else {
        clearInterval(interval);
        difference = Date.now() - startTime;
        timerRunning = false;
    }
}

function reset() {
    clearInterval(interval);
    startTime = null;
    difference = 0;
    timerRunning = false;
    document.getElementById("display").innerText = "00:00:00";
}

function updateDisplay() {
    updatedTime = Date.now();
    difference = updatedTime - startTime;
    
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById("display").innerText = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
