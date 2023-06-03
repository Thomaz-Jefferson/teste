let firstCard = null;
let secondCard = null;
let hasFlippedCard = false;
let lockBoard = false;

function flipCard(card) {
  if (lockBoard) return;
  if (card === firstCard) return;

  card.classList.add('flip');

  if (!hasFlippedCard) {
    // Primeiro clique
    hasFlippedCard = true;
    firstCard = card;
  } else {
    // Segundo clique
    secondCard = card;
    checkForMatch();
  }
}

function checkForMatch() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();
