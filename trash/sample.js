const slider = document.querySelector(".slider");
const cards = Array.from(document.querySelectorAll(".card"));
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const cardWidth = cards[0].offsetWidth + 20; // Width of card + margin
const visibleCards = Math.floor(slider.parentElement.offsetWidth / cardWidth); // Number of visible cards

// Clone the cards to create infinite effect
const clonedCards = [
  ...cards.slice(0, visibleCards).map((card) => card.cloneNode(true)),
  ...cards,
  ...cards.slice(-visibleCards).map((card) => card.cloneNode(true)),
];
slider.innerHTML = ""; // Clear the slider and add cloned cards
clonedCards.forEach((card) => slider.appendChild(card));

let index = visibleCards; // Start with the first actual card

function updateSliderPosition() {
  slider.style.transform = `translateX(${-index * cardWidth}px)`;
}

function handleTransitionEnd() {
  if (index === 0) {
    slider.style.transition = "none"; // Disable transition
    index = clonedCards.length - 2 * visibleCards; // Move to the last real card
    updateSliderPosition();
    setTimeout(
      () => (slider.style.transition = "transform 0.5s ease-in-out"),
      0
    ); // Re-enable transition
  } else if (index === clonedCards.length - visibleCards) {
    slider.style.transition = "none"; // Disable transition
    index = visibleCards; // Move to the first real card
    updateSliderPosition();
    setTimeout(
      () => (slider.style.transition = "transform 0.5s ease-in-out"),
      0
    ); // Re-enable transition
  }
}

slider.addEventListener("transitionend", handleTransitionEnd);

prevButton.addEventListener("click", () => {
  index--;
  updateSliderPosition();
});

nextButton.addEventListener("click", () => {
  index++;
  updateSliderPosition();
});

// Adjust for window resizing
window.addEventListener("resize", () => {
  const newCardWidth = cards[0].offsetWidth + 20;
  const newVisibleCards = Math.floor(
    slider.parentElement.offsetWidth / newCardWidth
  );
  if (newVisibleCards !== visibleCards) {
    location.reload(); // Reload to adjust layout based on new card width
  }
});
