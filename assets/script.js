document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('[data-placeholder-link][href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
