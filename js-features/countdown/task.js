let startData = 59;
const counter = function(){
    const timer = document.getElementById("timer");
    timer.textContent -= 1;

if (timer.textContent < 0) {
    clearInterval(intervalID);
    alert("Вы победили в конкурсе!");
}
}

let intervalID = setInterval(counter, 1000)


