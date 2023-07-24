const toggleBtn = document.querySelector(".sidebar-toggle");
const cloaseBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  //   if (sidebar.classList.contains("show-sidebar")) {
  //     sidebar.classList.remove("show-sidebar");
  //   } else {
  //     sidebar.classList.add("show-sidebar");
  //   }
  sidebar.classList.toggle("show-sidebar");
});

cloaseBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

// simply put what we are actually doing in with this app is hiding the sidebar by default and then adding a class in the css that will show the sidebar.

// in the css this piece of code is resposible for the sidebar collapsing into its own width essentially dissappearing from view.
// .sidebar {
// transform: translate(-100%);
// }

// toggling this piece of css will bring give us the functioanlity to show the sidebar.
// .show-sidebar {
//   transform: translate(0);
// }

// just like in the navbar lesson John showed us the long and the short way to show and hide the sidebar.
