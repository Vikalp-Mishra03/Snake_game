let inputDir = { x: 0, y: 0 };
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let speed = 5;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
];
const board = document.getElementById('board');
let food = { x: 6, y: 7 };
const scorebox = document.getElementById('scorebox');
const hiscoreBox = document.getElementById('hiscorebox'); // Assuming you have an element with id 'hiscorebox'

// game function
function main(current_time) {
    window.requestAnimationFrame(main);
    if ((current_time - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = current_time;
    gameEngine();
}

function isCollide(snake) {
    // when you bump into yourself
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }

    // when you bump into a wall
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }
}

function gameEngine() {
    // Part 1: Updating the snake array and food
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game Over! Press any key to restart the game.");
        snakeArr = [{ x: 13, y: 15 }];
        musicSound.play();
        score = 0;
    }

    // If you have eaten the food, increment the score and regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        score++;
        scorebox.innerHTML = "Score: " + score;
        if (score > hiscoreval) {
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        }
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
        foodSound.play();
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Part 2: Display the snake and food
    board.innerHTML = "";

    // Display the snake
    snakeArr.forEach((e, index) => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add(index === 0 ? 'head' : 'snake');
        board.appendChild(snakeElement);
    });

    // Display the food
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

// Main logic starts here
musicSound.play();
let hiscoreval = parseInt(localStorage.getItem("hiscore")); // Parse as an integer
if (isNaN(hiscoreval)) {
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
} else {
    hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp') {
        inputDir.x = 0;
        inputDir.y = -1;
    } else if (e.key === 'ArrowDown') {
        inputDir.x = 0;
        inputDir.y = 1;
    } else if (e.key === 'ArrowLeft') {
        inputDir.x = -1;
        inputDir.y = 0;
    } else if (e.key === 'ArrowRight') {
        inputDir.x = 1;
        inputDir.y = 0;
    }
    moveSound.play();
});
