//console.log(snakeBodyImg);

//console.log(snakeTailImg);

let containerLst = document.querySelectorAll('.container-lst');

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


function moveSnake() {
    const snakeHeadImg = document.getElementById("snakeHead");
    const snakeBodyImg = document.getElementById("snakeBody");
    const snakeTailImg = document.getElementById("snakeTail");
    let i = 0;
    let j = 0;
    let headCell;
    let bodyCell;
    let tailCell;
    let headPosX;
    let headPosY;
    
    window.addEventListener("keydown", function (e) {

        if (e.key === "ArrowDown") {
            i++;
            if (i > 9) i = 0;
            headCell = getCell(j, i);
            headPosX = j;
            headPosY = i;
            headCell.appendChild(snakeHeadImg);
            //bodyCell = getCell(j, i-1);
            //tailCell = getCell(j, i-2);
        }

        else if (e.key === "ArrowRight") {
            j++;
            if (j > 9) j = 0;
            headCell = getCell(j, i);
            headPosX = j;
            headPosY = i;
            headCell.appendChild(snakeHeadImg);
            //bodyCell = getCell(j-1, i);
            //tailCell = getCell(j-2, i);
        }

        else if (e.key === "ArrowLeft") {
            j--;
            if (j < 0) j = 9;
            headCell = getCell(j, i);
            headPosX = j;
            headPosY = i;
            headCell.appendChild(snakeHeadImg);
           // bodyCell = getCell(j+1, i);   
            //tailCell = getCell(j+2, i);
        }

        else if (e.key === "ArrowUp") {
            i--;
            if (i < 0) i = 9;
            headCell = getCell(j, i);
            headPosX = j;
            headPosY = i;
            headCell.appendChild(snakeHeadImg);
            //bodyCell = getCell(j, i+1);
            //tailCell = getCell(j, i+2);
        }

        bodyCell = getCell(headPosX, headPosY);
        bodyCell.appendChild(snakeBodyImg);
        
        
        //tailCell.appendChild(snakeTailImg);
    });
}

moveSnake()

function bodyAndTailFollowHead() {

}
