document.querySelector(".button-toggle-mode.to-white").addEventListener("click", function () {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("white-theme");
  document.querySelector(".button-toggle-mode.to-white").classList.add("hidden");
  document.querySelector(".button-toggle-mode.to-dark").classList.remove("hidden");
});

document.querySelector(".button-toggle-mode.to-dark").addEventListener("click", function () {
  document.body.classList.remove("white-theme");
  document.body.classList.add("dark-theme");
  document.querySelector(".button-toggle-mode.to-dark").classList.add("hidden");
  document.querySelector(".button-toggle-mode.to-white").classList.remove("hidden");
});
