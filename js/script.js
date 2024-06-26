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

/**
 * Get a random abscissa and a random ordinate between 0 and 9
 * @returns {array} - array with the two coordinates
 */
function getRandomCoordinates() {
    const randomX = Math.floor(Math.random() * 10);
    const randomY = Math.floor(Math.random() * 10);
    return [randomX, randomY];
}

/**
 * set an apple on a random cell
 */
function setAppleOnGrid() {
    const randomCoord = getRandomCoordinates();
    const appleCell = getCell(randomCoord[0], randomCoord[1]);
    const newImg = document.createElement("img");
    newImg.setAttribute("src", "img/Pomme.png");
    newImg.classList.add("appleSize");
    appleCell.appendChild(newImg);
}

setAppleOnGrid();

function increaseSnakeSize(headCoord) {
    console.log(headCoord);

}

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
    let arrowDirection = "left";
    let increaseSnake;

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

        else return;

        headCell = getCell(j, i);

        const elements = headCell.getElementsByTagName("img");
        const elementArray = (Object.values(elements));

        if (elementArray[0] != undefined) {   // if there's an apple in the cell
            elementArray[0].remove();
            setAppleOnGrid();
            //increaseSnakeSize(headPos[0]);
            increaseSnake = true;
            /* const newBodyElement = document.createElement("img");
             newBodyElement.setAttribute("src", "img/corpsbleu.svg");
             newBodyElement.classList.add("body");
             console.log(newBodyElement);
             bodyCell = getCell(headPos[0][0], headPos[0][1]);
             bodyCell.appendChild(newBodyElement);
             console.log(bodyCell);
             headCell = getCell()*/
        }

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
    // setInterval(arrowDirection, 1000);

}

moveSnake();

function selectMode(clickedButton) {

    const gameMenu = document.getElementById("menuMode");
    const gameCustomise = document.getElementById("menuCustomise");
    const gameSize = document.getElementById("menuSize");
    const gameGrid = document.getElementById("menuGrid");
    const game = document.getElementById("game");

    switch (clickedButton) {

        case 'selectSinglePlayer':

            gameMenu.style.display = "none";
            gameCustomise.style.display = "flex";
            break;

        case 'selectFastMode':

            gameMenu.style.display = "none";
            gameSize.style.display = "flex";
            break;

        case 'selectTwoPlayerMode':

            gameMenu.style.display = "none";
            gameSize.style.display = "flex";
            break;

        case 'smallGamingScreen':

            gameSize.style.display = "none";
            gameGrid.style.display = "grid";
            game.style.padding = "0";
            document.body.style.overflow = "hidden";
            break;

        case 'mediumGamingScreen':

            gameSize.style.display = "none";
            // .style.display = "grid";
            game.style.padding = "0";
            document.body.style.overflow = "hidden";
            break;

        case 'largeGamingScreen':

            gameSize.style.display = "none";
            // .style.display = "grid";
            game.style.padding = "0";
            document.body.style.overflow = "hidden";
            break;

        case 'play':

            gameCustomise.style.display = "none";
            gameGrid.style.display = "grid";
            game.style.padding = "0";
            document.body.style.overflow = "hidden";
            break;

        case 'backMenu':

            gameMenu.style.display = "flex";
            gameSize.style.display = "none";
            gameCustomise.style.display = "none";
            break;

        case 'backMenuTwo':

            gameMenu.style.display = "flex";
            gameSize.style.display = "none";
            gameCustomise.style.display = "none";
            break;
    }
}

document.getElementById('selectFastMode').addEventListener('click', function () {
    selectMode(this.id);
});

document.getElementById('play').addEventListener('click', function () {
    selectMode(this.id);
});

document.getElementById('selectSinglePlayer').addEventListener('click', function () {
    selectMode(this.id);
});

document.getElementById('selectTwoPlayerMode').addEventListener('click', function () {
    selectMode(this.id);
});

document.getElementById('smallGamingScreen').addEventListener('click', function () {
    selectMode(this.id);
});

document.getElementById('backMenu').addEventListener('click', function () {
    selectMode(this.id);
});

document.getElementById('backMenuTwo').addEventListener('click', function () {
    selectMode(this.id);
});

