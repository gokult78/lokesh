document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Thanks! Your message has been received.');
      form.reset();
    });
  }

  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
