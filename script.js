console.log("script.js is connected!");
const bioHeading = document.querySelector("#bio-heading");
console.log(bioHeading);

const jokeBtn = document.querySelector("#games-btn");
const joke = document.querySelector("#favourite-game");

jokeBtn.addEventListener("click", function () {
    joke.style.display = "block";
});
