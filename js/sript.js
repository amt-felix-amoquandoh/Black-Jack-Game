let allCards = []
let sum = 0;
let isGameOn = true;
let hasBlackjack = false;
let gameMessage = " ";
let player = {
  Name : "Asher",
  Balance : 180
}



let playerScore = document.getElementById("playerScore");
let message = document.getElementById("gameAlert");
let sumMessage = document.getElementById("sumOfCards");
let cards = document.getElementById("numOfCards");

playerScore.textContent = player.Name + ": Ghc" + player.Balance;


function getRandomCard(){
 let randomCard = Math.floor(Math.random() * 13) + 1;
 if (randomCard === 1){ 
  return 11;
 } else if (randomCard > 10){
  return 10;
 } else {
  return randomCard;
 }  
}



function startGame (){
  let isGameOn = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  let allCards = [firstCard, secondCard]
  let sum = firstCard + secondCard;
  renderGame();
}

function renderGame (){
  cards.textContent = "Cards: " ;
  for(let i = 0; i < allCards.length; i++){
    cards.textContent += allCards[i] + " ";
  }
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
  if (isGameOn === true && hasBlackjack === false){
    newCard = getRandomCard();
    sum += newCard;
    
    allCards.push(newCard);
    renderGame();
  } else {
    startGame();
  }
  
};




