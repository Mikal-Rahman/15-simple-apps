const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// we are going to traverse the dom in this exercise which is just a fancy term for moving up and down the DOM tree.

// we are going to add a class to the parent of the parent of the button which is class = "question".

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
