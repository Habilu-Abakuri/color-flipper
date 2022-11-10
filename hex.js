const hexColor = [0, 1, 3, 4, 5, 6, 7, 8, 9
, "A", "B", "C", "D", "E", "F"];

let button = document.getElementById("button");
let color = document.querySelector(".color");

button.addEventListener("click", () => {
    hex = "#";

    for (let i = 0; i < 6; i++)
    {
        hex += hexColor[getRandomNumber];
    }

    color.textContent = hex;
    document.body.style.backgroundColor = hex;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hexColor.length);
}