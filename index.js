const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelector(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setInervalId;
let score = 0;

//high score from local storage

let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = 'High Score: ${highScore}';

//random values or food position [1 and 30]

const updateFoodPosition = () => {
    foodX = Math.floor(Math.random()* 30) + 1;
    foodY = Math.floor(Math.random()* 30) + 1;
}

const handleGameOver = () => {
    clearInterval(setInervalId);
    alert("Game Over!! Press Ok to replay....");
    location.reload();
}

//velocity change based on key press

const changeDirection = e =>{
    if (e.key === "ArrowUp" && velocity != 1){
        velocityX = 0;
        velocityY = -1;
    }else if (e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}