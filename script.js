// script.js
let timerInterval;
let elapsedTime = 0;
let isRunning = false;
let laps = [];

function startStop() {
    if (isRunning) {
        clearInterval(timerInterval);
        document.getElementById("startStop").innerText = "Start";
    } else {
        timerInterval = setInterval(updateTime, 1000);
        document.getElementById("startStop").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function updateTime() {
    elapsedTime++;
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;
    document.getElementById("display").innerText = 
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    document.getElementById("startStop").innerText = "Start";
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = "";
    laps = [];
}

function recordLap() {
    if (isRunning) {
        let lapTime = document.getElementById("display").innerText;
        laps.push(lapTime);
        let lapElement = document.createElement("div");
        lapElement.innerText = `Lap ${laps.length}: ${lapTime}`;
        document.getElementById("laps").appendChild(lapElement);
    }
}
