const cookie = document.getElementById("cookie");
function changeSize(){
    cookie.width = 300;
}
cookie.onclick = changeSize;

const counter = document.getElementById("clicker__counter");
function clickCount() {
    counter.textContent ++;
}
cookie.onclick = clickCount;


