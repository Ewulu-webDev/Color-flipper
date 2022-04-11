/* 
Work Flow
1. initialize values of array
2. assign a value to btn variable

add an eventlistener....
the function performs a loop and gets  random values that adds up to six
Js manipulates the DOM and adds the text to the html file displayed.
*/


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get a random number
    
    let hexColor = "#";
    for(i=0; i <= 5; i++ ) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}