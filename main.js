const buttons = document.querySelectorAll(".rate-button");
const submit = document.querySelector(".submit-button");
const activeCard = document.querySelector(".active-card");
const thankYouCard = document.querySelector(".card-thank-you");
const selected = document.querySelector(".selected");
let rating;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("bg-[var(--orange-500)]"));
    buttons.forEach((b) => b.classList.remove("text-[var(--grey-900)]"));

    button.classList.add("bg-[var(--orange-500)]");
    button.classList.add("text-[var(--grey-900)]");
    rating = button.textContent;
  });
});

submit.addEventListener("click", () => {
  activeCard.classList.add("hidden");
  thankYouCard.classList.remove("hidden");

  if (rating === undefined) {
    rating = 0;
  }
  selected.textContent = `You selected ${rating} out of 5`;
});
