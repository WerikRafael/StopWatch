const timerEl = document.getElementById('timer');
const masksList = document.getElementById('marks-list');
let intervalId = 0;
let timer = 0;
let marks = [];

const formtTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const hundreths = time % 100;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundreths.toString().padStart(2, '0')}`;
}

const toggleTimer = () => {
    const button = document.getElementById('power');
    const action = document.getElementById('action')

    clearInterval(intervalId);

    if (action == 'start' || action == 'continue'){
        intervalId = setInterval(() =>{
            timer += 1;
            setTimer(timer)
        }, 10);
        button.setAttribute('action', 'pause');
        button.innerHTML = '<i class="fa-solid fa-pause"></i>'
    } else if (action == 'pause'){
        button.setAttribute('action', 'continue');
        button.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}

const setTimer = (time) => {
    timerEl.innerText = formtTime(time);
}

document.getElementById('power').addEventListener('click', toggleTimer);