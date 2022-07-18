let firstCard = 12;
let secondCard = 9;
let sum = firstCard + secondCard;

let hasBlackjack = false;
let isGameOn = true;
let gameMessage = ""

let message = document.getElementById("gameAlert");
let sumMessage = document.getElementById("sumOfCards");


function startGame (){
  sumMessage.textContent = "Sum: " + sum;
  if (sum <= 20){
    gameMessage = "Try again? 🤔"
} else if (sum === 21){
   hasBlackjack = true;
   gameMessage = "You got blackjack! 💪"
} else {
   isGameOn = false
   gameMessage = "Game Over! 😏"
};
  gameAlert.textContent = gameMessage;
}

