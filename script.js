// game Constants & variable
let direction = { x: 0, y: 0 };
const foodSound = new Audio('music/food.mp3')
const gameSound = new Audio('music/gameover.mp3')
const moveSound = new Audio('music/move.mp3')
const musicSound = new Audio('music/music.mp3')
let speed = 2;
let lastPaintTime = 0;
let SnakeArr = [
    { x: 13, y: 15 }
]



// game function
function main(current_time) {
    window.requestAnimationFrame(main);
    if ((current_time - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    console.log(current_time)
    gameEngine();
}

function gameEngine() {
    // *Part 1: Updating the snake array and food


    // *Part 2: Display the snake and food
    board.innerHTML = "";
    SnakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('food')
        board.appendChild(snakeElement)
    })
}


// main logic start here
window.requestAnimationFrame(main)