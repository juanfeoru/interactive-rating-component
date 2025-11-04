const activeCard = document.querySelector(".rating-card--active");
const btn = document.querySelector(".rating-card__submit");
const thankYouCard = document.querySelector(".rating-card--thank-you");

const ratingButton = document.querySelectorAll(".rating-card__ratings .rating-card__rate-button");


btn.addEventListener("click", () => {
     activeCard.classList.add("hidden");
     thankYouCard.classList.remove("hidden");
});

ratingButton.forEach((boton) => {
    boton.addEventListener("click", () => {

        ratingButton.forEach((b) => {
            b.classList.remove("active");
        });

        boton.classList.add("active");
    });
});

