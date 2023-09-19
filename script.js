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
food = {x:6, y: 7}

// game function
function main(current_time) {
    window.requestAnimationFrame(main);
    if ((current_time - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    // console.log(current_time)
    gameEngine();
}

function gameEngine() {
    // *Part 1: Updating the snake array and food


    // *Part 2: Display the snake and food
    // ?Display the snake
    board.innerHTML = "";
    SnakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head')
        }
        else{
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
window.addEventListener('keydown', e=>{
    inputDir = {x: 0, y:1}  // start the game
    moveSound.play();
    switch (e.key){
        case 'ArrowUp' :
            console.log("Arrowup")
            break;
        case 'ArrowDown' :
            console.log("ArrowDown")
            break;
        case 'ArrowLeft' :
            console.log("ArrowLeft")
            break;
        case 'ArrowRight' :
            console.log("ArrowRight")
            break;
    }
})