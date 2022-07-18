let firstCard = 9;
let secondCard = 8;
let allCards = [firstCard, secondCard]
let sum = firstCard + secondCard;

let hasBlackjack = false;
let isGameOn = true;
let gameMessage = ""

let message = document.getElementById("gameAlert");
let sumMessage = document.getElementById("sumOfCards");
let cards = document.getElementById("numOfCards");

function startGame (){
  renderGame();
}

function renderGame (){
  cards.textContent = "Cards: " + allCards[0] + " " + allCards[1];
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


function newGame(){
  let newCard = 4;
  sum += newCard;
  
  allCards.push(newCard);
  renderGame();
};

