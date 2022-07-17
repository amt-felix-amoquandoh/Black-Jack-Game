let firstCard = 8;
let secondCard = 9;
let sum = firstCard + secondCard;

let hasBlackjack = false;
let isGameOn = true;
let gameAlert = ""

if (sum <= 20){
    gameAlert = "Try again?"
} else if (sum === 21){
   hasBlackjack = true;
   gameAlert = "wohoo you got blackjack!!!!"
} else {
   isGameOn = false
   gameAlert = "Game Over!"
};