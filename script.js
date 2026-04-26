document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll("#slider img");
  let current = 0;

  function showSlide(index) {
    slides.forEach((img, i) => {
      img.classList.remove("active");
      if (i === index) img.classList.add("active");
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  showSlide(current);
  setInterval(nextSlide, 3000);
});
