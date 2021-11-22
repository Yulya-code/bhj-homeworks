const holeIndex = function getHole (index) {
document.getElementsById(`hole${index}`);
}

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function countDeadMole() { 
  hole.className.includes('hole_has-mole') ? dead.textContent +=1 : lost.textContent +=1;
}

holeIndex.onclick = countDeadMole;


