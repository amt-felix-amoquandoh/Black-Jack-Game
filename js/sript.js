let firstCard = 8;
let secondCard = 9;
let sum = firstCard + secondCard;

let hasBlackjack = false;
let isGameOn = true;
let gameMessage = ""

let message = document.getElementById("gameAlert");


function startGame (){
  if (sum <= 20){
    gameMessage = "Try again?"
} else if (sum === 21){
   hasBlackjack = true;
   gameMessage = "wohoo you got blackjack!!!!"
} else {
   isGameOn = false
   gameMessage = "Game Over!"
};
  gameAlert.textContent = gameMessage;
}

