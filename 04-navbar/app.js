// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }
  links.classList.toggle("show-links");
});

// John demonstrated two ways to implent functionality to show or hide an element. the code for both is above with longer more manula method commented out and the one line method left to perform the function.

// the manual method above the ability to see if there is a particular class that exist in the html file. this can be done by using the contains method and console logging the value. the contains method can be useful in if statements which he uses above.
