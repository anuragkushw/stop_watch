let isRunning = false;
let startTime = 0;
let interval;

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById('startStop').textContent = 'Start';
    } else {
        startTime = startTime || Date.now();
        interval = setInterval(updateTime, 10);
        document.getElementById('startStop').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    document.getElementById('startStop').textContent = 'Start';
    document.getElementById('display').textContent = '00:00:00';
    isRunning = false;
    startTime = 0;
}

function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = String(elapsedTime.getUTCHours()).padStart(2, '0');
    const minutes = String(elapsedTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(elapsedTime.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(elapsedTime.getUTCMilliseconds()).padStart(3, '0');
    document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
