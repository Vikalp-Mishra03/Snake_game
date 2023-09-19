// game Constants & variable
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio('music/food.mp3')
const gameOverSound = new Audio('music/gameover.mp3')
const moveSound = new Audio('music/move.mp3')
const musicSound = new Audio('music/music.mp3')
let speed = 2;
let score = 0;
let lastPaintTime = 0;
let SnakeArr = [
    { x: 13, y: 15 }
]
food = { x: 6, y: 7 }

// game function
function main(current_time) {
    window.requestAnimationFrame(main);
    if ((current_time - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    // console.log(current_time)
    gameEngine();
}

function isCollide(sarr){
    return false
}
function gameEngine() {
    // *Part 1: Updating the snake array and food
    if (isCollide(SnakeArr)){
        gameOverSound.play()
        musicSound.pause()
        inputDir = {x:0, y:0}
        alert("Game Over Press any key to restart the game!")
        SnakeArr = [{ x: 13, y: 15 }]
        musicSound.play()
        score = 0;
    }

    // if you have eaten the food, increment the score and regenerate the food
    if(SnakeArr[0].y === food.y && SnakeArr[0].x === food.x){
        SnakeArr.unshift({x: SnakeArr[0].x + inputDir.x, y: SnakeArr[0].y + inputDir.y})
        let a =1;
        let b = 16;
        food = {x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }
        // *Part 2: Display the snake and food
        // ?Display the snake
        board.innerHTML = "";
    SnakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head')
        }
        else {
            snakeElement.classList.add('snake')
        }

        board.appendChild(snakeElement)
    })
    // ? Display the food
    foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement)
}


// main logic start here
window.requestAnimationFrame(main)
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 }  // start the game
    moveSound.play();
    switch (e.key) {
        case 'ArrowUp':
            console.log("Arrowup")
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case 'ArrowDown':
            console.log("ArrowDown")
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case 'ArrowLeft':
            console.log("ArrowLeft")
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case 'ArrowRight':
            console.log("ArrowRight")
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break
    }
})