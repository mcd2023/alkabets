document.addEventListener("DOMContentLoaded", () => {

  // sadece slider varsa çalışsın (site bozulmasın)
  const slider = document.getElementById("slider");
  const caption = document.getElementById("caption");

  if (!slider) return;

  const slides = slider.querySelectorAll("img");
  if (slides.length === 0) return;

  let current = 0;

  function showSlide(i) {

    slides.forEach(img => img.classList.remove("active"));
    slides[i].classList.add("active");

    // caption varsa çalıştır (diğer sayfalar bozulmasın)
    if (caption) {
      caption.classList.remove("show");

      setTimeout(() => {
        caption.innerText = slides[i].dataset.title || "";
        caption.classList.add("show");
      }, 300);
    }
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  showSlide(current);
  setInterval(nextSlide, 3000);

});
