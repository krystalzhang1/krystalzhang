document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#" || link.getAttribute("href")?.endsWith(".pdf")) {
      event.preventDefault();
    }
  });
});
