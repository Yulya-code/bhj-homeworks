let startData = 59;
const counter = function(){
    const timer = document.getElementById("timer");
    timer.textContent -= 1;
}

setInterval(counter, 1000)

if (startData == 0) {
    clearInterval();
    alert("Вы победили в конкурсе!");
}