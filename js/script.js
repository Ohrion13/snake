const snakeHeadImg = document.getElementById("snakeHead")
console.log(snakeHeadImg);

const snakeBodyImg = document.getElementById("snakeBody")
console.log(snakeBodyImg);

const snakeTailImg = document.getElementById("snakeTail")
console.log(snakeTailImg);

let containerLst = document.querySelectorAll('.container-lst');


function gridCoordinates() {

    containerLst.forEach(function (cell, index) {
        let x = index % 10;
        let y = Math.floor(index / 10);

        cell.setAttribute('data-x', x);
        cell.setAttribute('data-y', y);

        
    });

}

gridCoordinates()


function coordinates(x, y) {
    const li = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    return li
    
}

console.log(containerLst);


function snakeMove() {
    window.addEventListener("keydown", function (e) {

        if (e.key === "ArrowDown") {

            // const newLI = coordinates(0, 1);

            // snakeHeadImg.appendChild(newLI);

            snakeHeadImg.parentElement = coordinates(0, 1);
        }
    });
}

snakeMove()






function bodyAndTailFollowHead() {

}
