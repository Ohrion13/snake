const snakeHeadImg = document.getElementById("snakeHead")
console.log(snakeHeadImg);

const snakeBodyImg = document.getElementById("snakeBody")
console.log(snakeBodyImg);

const snakeTailImg = document.getElementById("snakeTail")
console.log(snakeTailImg);


function snakeMove() {

    window.addEventListener("keydown", function (e) {

        if (e.key === "ArrowDown") {

            const move = document.querySelectorAll('.container-lst');
            const container = document.querySelector('.container');

            const newSnakeHeadImg = document.createElement("img");
            newSnakeHeadImg.classList.add("color-green");
            newSnakeHeadImg.setAttribute("alt", "image svg représentant la tête du serpent");

            snakeHeadImg.remove();

            for (let index = 0; index < move.length; index++) {
                index.appendChild(newSnakeHeadImg);
            }

            console.log(container);

            // snakeHeadImg.previousElementSibling
        }
    });
}

snakeMove()

function bodyAndTailFollowHead() {

}
