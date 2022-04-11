const colors = ["#3b5a9d", "4fb2aa", "rgba(133,122,200)", "#f15025", "red", "green"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    // I want to generate a random number
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]; /* gets random color from the array */
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}