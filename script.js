const txtTime = document.querySelector("#timer-text");
const txtHistoric = document.querySelector("#history-camp");

let timerRunning = false;
let min = seg = millis = 0;

let timer;
let htmlHistoric = "";
let htmlTime = "00:00:00";

function startTimer() {
    clearInterval(timer);
    timer = setInterval(timerRun, 100);
}
function stopTimer() {
    clearInterval(timer);
}

function timerRun() {
    millis++;

    if (millis > 9) {
        seg++;
        millis = 0;
    }
    if (seg > 59) {
        min++;
        seg = 0;
    }

    htmlTime = (min <= 9 ? "0" + min : min) + ":" + (seg <= 9 ? "0" + seg : seg) + ":" + (millis <= 9 ? "0" + millis : millis);
    txtTime.innerHTML = htmlTime;
    console.log(html);

}

function btnStartStopClick() {
    const btnStartStop = document.querySelector("#startstop");
    if (timerRunning) {
        timerRunning = false;
        btnStartStop.setAttribute("class", "btn-nonclick");
        btnStartStop.innerHTML = "começar";

        stopTimer();

    } else {
        timerRunning = true;
        btnStartStop.setAttribute("class", "btn-clicked");
        btnStartStop.innerHTML = "pausar";
        startTimer();
    }
}
function resetTimer() {
    htmlTime = "00:00:00";
    txtTime.innerHTML = htmlTime;
    min = seg = millis = 0;
}
function resetHistoric() {
    htmlHistoric = "";
    txtHistoric.innerHTML = htmlHistoric;
}
function captureTime() {
    htmlHistoric += `<p class="history-time"> ${htmlTime} </p>`;
    txtHistoric.innerHTML = htmlHistoric;
}
