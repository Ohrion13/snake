const containerLst = document.querySelectorAll('.container-lst');

/**
 * Gets a cell of the grid at the coordinates x and y
 * @param {number} x - abscissa of the cell
 * @param {number} y - ordinate of the cell
 * @returns {element} - the cell element (li) at the wanted coordinates
*/
function getCell(x, y) {
    return document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
}

/**
 * Sets the coordinates of each cell of the grid by adding data-x and data-y attributes
*/
function setGridCoordinates() {
    
    containerLst.forEach(function (cell, index) {
        let x = index % 10;
        let y = Math.floor(index / 10);
        
        cell.setAttribute('data-x', x);
        cell.setAttribute('data-y', y);
    });
}

setGridCoordinates();

function getRandomCoordinates() {
    const randomX = Math.floor(Math.random() * 10);
    const randomY = Math.floor(Math.random() * 10);
    return [randomX, randomY];
}

function setAppleOnGrid() {
    const randomCoord = getRandomCoordinates();
    const appleCell = getCell(randomCoord[0], randomCoord[1]);
    console.log(appleCell);
}

setAppleOnGrid();

function moveSnake() {
    const snakeHeadImg = document.getElementById("snakeHead");
    const snakeBodyImg = document.getElementById("snakeBody");
    const snakeTailImg = document.getElementById("snakeTail");
    let i = 0;
    let j = 0;
    let headCell;
    let bodyCell;
    let tailCell;
    let headPos = [];
    let arrowDirection;
    
    window.addEventListener("keydown", function (e) {

        if (e.key === "ArrowDown") {
            if (arrowDirection === "up") return;
            arrowDirection = "down";
            i++;
            if (i > 9) i = 0;
            headPos.unshift([j, i]);
            snakeHeadImg.style.transform = "rotate(90deg)"
            snakeBodyImg.style.transform = "rotate(90deg)"
            snakeTailImg.style.transform = "rotate(90deg)"
        }

        else if (e.key === "ArrowRight") {
            if (arrowDirection === "left") return;
            arrowDirection = "right";
            j++;
            if (j > 9) j = 0;
            headPos.unshift([j, i]);
            snakeHeadImg.style.transform = "rotate(0deg)"
            snakeBodyImg.style.transform = "rotate(0deg)"
            snakeTailImg.style.transform = "rotate(0deg)"
        }

        else if (e.key === "ArrowLeft") {
            if (arrowDirection === "right") return;
            arrowDirection = "left";
            j--;
            if (j < 0) j = 9;
            headPos.unshift([j, i]);
            snakeHeadImg.style.transform = "rotate(180deg)"
            snakeBodyImg.style.transform = "rotate(180deg)"
            snakeTailImg.style.transform = "rotate(180deg)"
        }

        else if (e.key === "ArrowUp") {
            if (arrowDirection === "down") return;
            arrowDirection = "up";
            i--;
            if (i < 0) i = 9;
            headPos.unshift([j, i]);
            snakeHeadImg.style.transform = "rotate(-90deg)"
            snakeBodyImg.style.transform = "rotate(-90deg)"
            snakeTailImg.style.transform = "rotate(-90deg)"
        }

        headCell = getCell(j, i);
        headCell.appendChild(snakeHeadImg);
       
        switch (headPos.length) {
            case 1:
                bodyCell = getCell(0, 0);
                tailCell = getCell(1, 0);
                break;
            case 2:
                bodyCell = getCell(0, 1);
                tailCell = getCell(0, 0);
                break;
            default:
                bodyCell = getCell(headPos[1][0], headPos[1][1]);
                tailCell = getCell(headPos[2][0], headPos[2][1]);
                break;
        }

        bodyCell.appendChild(snakeBodyImg);
        tailCell.appendChild(snakeTailImg);

    });

}

moveSnake();
