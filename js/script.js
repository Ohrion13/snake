const snakeHeadImg = document.getElementById("snakeHead")
console.log(snakeHeadImg);

const snakeBodyImg = document.getElementById("snakeBody")
console.log(snakeBodyImg);

const snakeTailImg = document.getElementById("snakeTail")
console.log(snakeTailImg);

let containerLst = document.querySelectorAll('.container-lst');

let i = 0;

const grid = document.querySelector('.js-container');


function gridCoordinates() {

    containerLst.forEach(function (cell, index) {
        let x = index % 10;
        let y = Math.floor(index / 10);

        cell.setAttribute('data-x', x);
        cell.setAttribute('data-y', y);

        
    });
    console.log([data-x=5], [data-y=3]);
}

gridCoordinates()


function snakeMove() {
    window.addEventListener("keydown", function (e) {

        if (e.key === "ArrowDown") {


        }
    });
}

snakeMove()



function bodyAndTailFollowHead() {

}
