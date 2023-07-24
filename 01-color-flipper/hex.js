const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // setting up the loop here that will run six times each time selecting a random index from our array. using let instead of const so that the value can be changed and we don't receive an error.
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  // multiplying here by the length of the array and generating a random number based on that.
  return Math.floor(Math.random() * hex.length);
}
