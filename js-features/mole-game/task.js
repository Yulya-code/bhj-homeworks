const holeIndex = function getHole (index) {
return document.getElementsById(`hole${index}`);
}

const deadMoleCounter = function() {
    const deadCounter = document.getElementById("dead");
    if (getHole(index).className = 'hole hole_has-mole') {
        deadCounter.textContent += 1;
}
}


