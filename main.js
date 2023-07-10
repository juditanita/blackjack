// 1. Create two variables, firstCard and secondCard.

let cards = [];
let sum = 0;
let msg = "";
let age = 22;
let nCard;
//tracking if it has blackjack
let hasBlackJack = false;
//tracking if it is out of the game or not
let isAlive = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

let player = {
  name: "🤑",
  chips: 150,
};

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    msg = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    msg = "Congratulation, you won! 🥳";

    hasBlackJack = true;
    playerEl.textContent = player["name"] + ": $ " + player["chips"];
  } else {
    msg = "You are out of game! 😶";

    isAlive = false;
  }

  /* if (age > 21) {
    console.log("Welcome to the club");
  } else {
    console.log("You can not enter the club!");
  } */

  messageEl.textContent = msg;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    //big plan get a new card add this card to the sum and run the code again
    console.log("Drawing a new card from the deck!");
    nCard = getRandomCard();
    sum += nCard;
    cards.push(nCard);

    console.log(cards);

    renderGame();
  }
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13 + 1);
  console.log(randomNumber);
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 10;
  } else {
    return randomNumber;
  }
}
