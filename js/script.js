const snakeHeadImg = document.getElementById("snakeHead")
console.log(snakeHeadImg);

const snakeBodyImg = document.getElementById("snakeBody")
console.log(snakeBodyImg);

const snakeTailImg = document.getElementById("snakeTail")
console.log(snakeTailImg);

let containerLst = document.querySelectorAll('.container-lst');


function gridCoordinates() {

    containerLst.forEach(function(cell, index) {
        let x = index % 10;
        let y = Math.floor(index / 10);

        cell.setAttribute('data-x', x);
        cell.setAttribute('data-y', y);
    });
} 

gridCoordinates()

console.log(dataset.x(0),dataset.y(1));




function snakeMove() {
    
    window.addEventListener("keydown", function (e) {
        
        if (e.key === "ArrowDown") {
             
        snakeHeadImg.parentElement.dataset.x = 10;




            // snakeHeadImg.remove();

            const newSnakeHeadImg = document.createElement("img");

            newSnakeHeadImg.id = "snakeHead";
            newSnakeHeadImg.classList.add("color-green");
            newSnakeHeadImg.setAttribute("alt", "image svg représentant la tête du serpent");

            // for (let index = 0; index < containerLst.length; index++) {

            // }


        }
    });
}

snakeMove()



function bodyAndTailFollowHead() {

}
