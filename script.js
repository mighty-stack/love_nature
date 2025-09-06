// Toggle navbar dropdown
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const animation = el.dataset.animate || "animate__fadeInUp";
        const delay = el.dataset.delay || "0s";

        
        el.style.setProperty("--animate-delay", delay);
        el.classList.add("animate__animated", animation, "animate__slower");

      
        el.classList.add("animated-once");
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 }); // Trigger when 20% is visible

  elements.forEach(el => observer.observe(el));
});
