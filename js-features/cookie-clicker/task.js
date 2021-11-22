const cookie = document.getElementById("cookie");
function changeSize(){
  cookie.width="200" ? cookie.width="300" : cookie.width="200";
}
cookie.onclick = changeSize;

const counter = document.getElementById("clicker__counter");
function clickCount() {
    counter.textContent ++;
}
cookie.onclick = clickCount;


