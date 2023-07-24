const colors = [
  "powderblue",
  "lavender",
  "mistyrose",
  "peachpuff",
  "lavenderblush",
  "aliceblue",
  "mintcream",
  "lemonchiffon",
  "aquamarine",
  "lightcoral",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // here is our functionality to enter the name of the color in to he DOM as well as actually changing the background color
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  // getting a random number that is the length of the colors array
  return Math.floor(Math.random() * colors.length);
}
