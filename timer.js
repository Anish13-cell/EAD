let countdown;
let timerRunning = false;

function startTimer() {
    if (timerRunning) return;

    const hours = parseInt(document.getElementById("hours").value) || 0;
    const minutes = parseInt(document.getElementById("minutes").value) || 0;
    const seconds = parseInt(document.getElementById("seconds").value) || 0;

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    
    if (totalSeconds <= 0) return;

    timerRunning = true;
    countdown = setInterval(() => {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        document.getElementById("display").innerText = 
            `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        if (totalSeconds <= 0) {
            clearInterval(countdown);
            timerRunning = false;
            alert("Time's up!");
        } else {
            totalSeconds--;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("hours").value = '';
    document.getElementById("minutes").value = '';
    document.getElementById("seconds").value = '';
    timerRunning = false;
}
