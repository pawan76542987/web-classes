const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const gridSize = 20;
const tileCount = 20;
const tileSize = canvas.width / tileCount;
const food_sound = new Audio("food_sound.mp3");
const bgMusic = new Audio("game_music.mp3");
const gameOverMusic = new Audio("gameover.mp3");

let snake = [{ x: 10, y: 10 }];
let direction = "RIGHT";
let food = { x: 10, y: 10 };
let speed = 300;
let score = 0;
let gameOver = false;

document.addEventListener("keydown", () => {
    if (bgMusic.paused) {
        bgMusic.currentTime = 0;
        bgMusic.play();
    }
});
function drawGrid() {
    ctx.strokeStyle = "#9d909033";
    for (let i = 0; i < tileCount; i++) {
        for (let j = 0; j < tileCount; j++) {
            ctx.strokeRect(i * tileCount, j * tileCount, tileSize, tileSize);
        }
    }
}
function draw() {
    // Clear canvas
    ctx.fillStyle = '#11f0e2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawGrid();
    // Draw snake (green)
    ctx.fillStyle = '#057405e6';
    snake.forEach(segment => {
        ctx.fillRect(
            segment.x * gridSize,
            segment.y * gridSize,
            gridSize - 2,
            gridSize - 2
        );
    });

    // Draw food (red)
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(
        food.x * gridSize,
        food.y * gridSize,
        gridSize - 2,
        gridSize - 2
    );
    ctx.fillStyle = "black";
    ctx.font = "bold 18px Arial";
    ctx.fillText("Score: " + score, 10, 20);
}
function move() {
    // Copy head position
    let head = {
        x: snake[0].x,
        y: snake[0].y
    };

    // Move head based on direction
    if (direction === 'UP') head.y--;
    if (direction === 'DOWN') head.y++;
    if (direction === 'LEFT') head.x--;
    if (direction === 'RIGHT') head.x++;

    // Add new head to front
    snake.unshift(head);

    // Check if food eaten
    if (head.x === food.x && head.y === food.y) {
        score++;
        placeFood();

        food_sound.play();

        if (score % 10 === 0 && gameSpeed > 50) {
            gameSpeed -= 1;
        }
    } else {
        snake.pop(); // Remove tail
    }
}
document.getElementById("restart").addEventListener("click", () => {
    if (gameOver) {
        resetGame();
    }
});
document.addEventListener('keydown',
    changeDirection);

function changeDirection(event) {
    const key = event.key;

    // Prevent 180° turns
    if (key === 'ArrowUp' &&
        direction !== 'DOWN')
        direction = 'UP';

    if (key === 'ArrowDown' &&
        direction !== 'UP')
        direction = 'DOWN';

    if (key === 'ArrowLeft' &&
        direction !== 'RIGHT')
        direction = 'LEFT';

    if (key === 'ArrowRight' &&
        direction !== 'LEFT')
        direction = 'RIGHT';
}
function checkCollision() {
    const head = snake[0];

    // Wall collision
    if (head.x < 0 ||
        head.x >= gridSize ||
        head.y < 0 ||
        head.y >= gridSize)
        return true;

    // Self collision
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x &&
            head.y === snake[i].y)
            return true;
    }

    return false;
}
function placeFood() {
    food.x = Math.floor(
        Math.random() * gridSize);
    food.y = Math.floor(
        Math.random() * gridSize);
}
function gameLoop() {
    // Update game state
    move();

    // Check if game over
    if (checkCollision() && !gameOver) {
        gameOver = true;  //game over

        gameOverMusic.pause();
        gameOverMusic.currentTime = 0;
        gameOverMusic.play();

        bgMusic.pause();
        return;
    }
    // Draw everything
    draw();
    // Schedule next frame
    setTimeout(gameLoop, speed);
}
function resetGame() {
    snake = [{ x: 10, y: 10 }];
    direction = 'RIGHT';
    score = 0;
    placeFood();

    gameOver = false;

    bgMusic.pause();
    bgMusic.currentTime = 0;
    bgMusic.play();

    gameLoop();
}
// Start the game
placeFood();
gameLoop();