const snakeBodyImg = document.getElementById("snakeBody");
//console.log(snakeBodyImg);

const snakeTailImg = document.getElementById("snakeTail");
//console.log(snakeTailImg);

let containerLst = document.querySelectorAll('.container-lst');


function getGridCoordinates() {
    
    containerLst.forEach(function (cell, index) {
        let x = index % 10;
        let y = Math.floor(index / 10);
        
        cell.setAttribute('data-x', x);
        cell.setAttribute('data-y', y);
    });
}

getGridCoordinates();

function getCoordinates(x, y) {
    return document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
}

function moveSnake() {
    const snakeHeadImg = document.getElementById("snakeHead");
    let i = 0;
    let j = 0;
    window.addEventListener("keydown", function (e) {

        if (e.key === "ArrowDown") {
            i++;
            if (i > 9) i = 0;
            const headCell = getCoordinates(j, i);
            //const bodyCell = getCoordinates(j, i-1)
            headCell.appendChild(snakeHeadImg);
            //bodyCell.appendChild(snakeBodyImg);
        }

        else if (e.key === "ArrowRight") {
            j++;
            if (j > 9) j = 0;
            const headCell = getCoordinates(j, i);
            headCell.appendChild(snakeHeadImg);
        }

        else if (e.key === "ArrowLeft") {
            j--;
            if (j < 0) j = 9;
            const headCell = getCoordinates(j, i);
            headCell.appendChild(snakeHeadImg);
        }

        else if (e.key === "ArrowUp") {
            i--;
            if (i < 0) i = 9;
            const headCell = getCoordinates(j, i);
            headCell.appendChild(snakeHeadImg);
        }
    });
}

moveSnake()

function bodyAndTailFollowHead() {

}
