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


  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" }
    })
      .then((response) => {
        if (response.ok) {
          status.innerText = "Thanks! Your message has been sent.";
          form.reset();
        } else {
          status.innerText = "Oops! Something went wrong.";
        }
      })
      .catch(() => {
        status.innerText = " Network error. Please try again.";
      });
  });