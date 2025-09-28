document.addEventListener("DOMContentLoaded", () => {
  // --- Navbar/Logo Scroll Swap ---
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("floating-logo");

  if (navbar && logo) {
    logo.style.opacity = "0";
    logo.style.pointerEvents = "none";

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.style.opacity = "0";
        navbar.style.pointerEvents = "none";
        logo.style.opacity = "1";
        logo.style.pointerEvents = "auto";
      } else {
        navbar.style.opacity = "1";
        navbar.style.pointerEvents = "auto";
        logo.style.opacity = "0";
        logo.style.pointerEvents = "none";
      }
    });

    logo.addEventListener("mouseenter", () => {
      logo.style.opacity = "0";
      logo.style.pointerEvents = "none";
      navbar.style.opacity = "1";
      navbar.style.pointerEvents = "auto";
    });

    navbar.addEventListener("mouseleave", () => {
      if (window.scrollY > 50) {
        navbar.style.opacity = "0";
        navbar.style.pointerEvents = "none";
        logo.style.opacity = "1";
        logo.style.pointerEvents = "auto";
      }
    });
  }

  // --- Carousel Auto-Slide ---
  const images = document.querySelectorAll(".carousel-img");
  const dots = document.querySelectorAll(".carousel-dots .dot");
  let currentIndex = 0;
  const intervalTime = 3000; // 3 seconds per slide

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Auto-slide every interval
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, intervalTime);

  // Dots click to jump to a specific slide
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.dataset.index);
      showImage(currentIndex);
    });
  });
});
