let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");
const bigAttack = document.getElementById("bigAtkButton");
const bigerAttack = document.getElementById("bigerAtkButton");
const playerNameInput = document.getElementById("playerName");
const attackValueInput = document.getElementById("attackValue");
const message = document.getElementById("message");

const attacks = [];
const historyList = document.getElementById("history");

const attackCount = document.getElementById("attackCount");
const largestAtk = document.getElementById("largestAtk");

const energyDisplay = document.getElementById("energyDisplay");


let energyScore = Number(energyDisplay.innerText);

let winScore = 20;

// TODO: create addPoint()
// TODO: create resetGame()
// TODO: connect both functions to buttons

function performAttack(){
  const playerName = playerNameInput.value.trim();
  const attackValue = getAttackValue();

  if (playerName === ""){
    message.innerText = "Please enter your name.";
    return;
  }
  if (attackValue === null){
    return;
  }

  const isCritical = attackValue === 10;
  const damage = calculateDamage(attackValue, isCritical);

  score += damage;
  attacks.push(damage);
  message.innerText = `${playerName} caused ${damage} damage.`;
  updateEnergy();
  updateDisplay();

}

function getAttackValue() {
  const rawValue = attackValueInput.value.trim();
  if (rawValue === "") {
    message.innerText = "Please enter a valid number.";
    return null;
  }
  const attackValue = Number(rawValue);
  if (Number.isNaN(attackValue)) {
    message.innerText = "Please enter a valid number.";
    return null;
  }
  if (attackValue < 1 || attackValue > 10) {
    message.innerText = "Choose an attack value from 1 to 10.";
    return null;
  }
  return attackValue;
}

function calculateDamage(baseDamage, isCritical){
  if(isCritical){
    return baseDamage * 2;
  }

  return baseDamage;
}

function updateEnergy(){

  if(energyScore === 0){
    attackButton.disabled = true;
    updateDisplay();
  }else {
    energyScore--;
  }

}


function updateHistory(){
  historyList.innerHTML="";

  for(let index = 0; index < attacks.length; index++){
    const listItem = document.createElement("li");
    listItem.innerText = `Attack ${index + 1}: ${attacks[index]} damage`;
    historyList.appendChild(listItem);

  }

  updateAttackCount();
  largestAtk.innerText = largestAttack();

}

function updateDisplay() {
  scoreDisplay.innerText = score;
  updateHistory();
  energyDisplay.innerText = energyScore;

  if (score >= winScore) {
    title.innerText = "YOU WIN!";
    attackButton.disabled = true;
  } else {
    title.innerText = "Click Attack";
    attackButton.disabled = false;
  }

  if(energyScore <= 0){
    title.innerText = "Out of Energy!";
    attackButton.disabled = true;
  } else {
    title.innerText = "Click Attack";
    attackButton.disabled = false;
  }


}

function resetGame() {
  score = 0;
  energyScore = 5;
  attacks.length = 0;
  playerNameInput.value = "";
  attackValueInput.value = "1";
  title.innerText = "Click Attack";
  message.innerText = "Enter your name and choose an attack value.";
  updateDisplay();
  updateAttackCount();
}

function updateAttackCount(){
  attackCount.innerText = attacks.length;
}

function largestAttack(){
  let largest = 0;
  for(let i = 0; i<attacks.length; i++){
    if (attacks[i]>largest){
      largest = attacks[i];
    }
  }
  return largest;
}




console.log(attackValueInput.value);
console.log(typeof attackValueInput.value);

attackButton.addEventListener('click', performAttack);
// bigAttack.addEventListener('click', bigAttackPoint);
// bigerAttack.addEventListener('click', bigerAttackPoint);
resetButton.addEventListener('click', resetGame);



// function addPoint(){
//     if (score < 20){
//     score ++;
//     }
//     updateText();
//     youWin();
// }

// function bigAttackPoint() {
//     if (score < 20){
//     score += 5;
//     }
//     updateText();
//     // youWin();
// }

// function bigerAttackPoint() {
//   if (score < 20){
//     score += 10;
//   }
//   updateText();
//   // youWin();
// }

// function youWin(){
//     if (score >= 20){
//         title.textContent = "You Win!";
//     }
// }

// function updateText(){
//   scoreDisplay.textContent = score;
// }
