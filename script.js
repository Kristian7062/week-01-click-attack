let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");
const bigAttack = document.getElementById("bigAtkButton");


// TODO: create addPoint()
// TODO: create resetGame()
// TODO: connect both functions to buttons


function addPoint(){
    if (score < 20){
    score ++;
    }
    scoreDisplay.textContent = score;
    youWin();
}

function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
    title.textContent = "Click the buttons to Attack";
}

function bigAttackPoint() {
    if (score < 20){
    score += 5;
    }
    scoreDisplay.textContent = score;
    youWin();
}

function youWin(){
    if (score >= 10){
        title.textContent = "You Win!";
    }
}

attackButton.addEventListener('click', addPoint);
bigAttack.addEventListener('click', bigAttackPoint);
resetButton.addEventListener('click', resetGame);
