const snakeHeadImg = document.getElementById("snakeHead")
console.log(snakeHeadImg);

const snakeBodyImg = document.getElementById("snakeBody")
console.log(snakeBodyImg);

const snakeTailImg = document.getElementById("snakeTail")
console.log(snakeTailImg);


function snakeMove() {

    window.addEventListener("keydown", function (e) {

        if (e.key === "ArrowDown") {

            // const container = document.querySelector('.container');
            const containerLst = document.querySelectorAll('.container-lst');
            const x = 0;
            const y = 0;

            snakeHeadImg.remove();

            const newSnakeHeadImg = document.createElement("img");

            newSnakeHeadImg.id = "snakeHead";
            newSnakeHeadImg.classList.add("color-green");
            newSnakeHeadImg.setAttribute("alt", "image svg représentant la tête du serpent");

            for (let index = 0; index < containerLst.length; index++) {
                containerLst[index].getBoundingClientRect();
            }

            console.log(containerLst[index]);

        }
    });
}

snakeMove()


function bodyAndTailFollowHead() {

}
