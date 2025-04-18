/* script.js */

// Optional script file to enhance interactivity

// Scroll animation, dark mode toggle, or navbar behavior can be added here

// Example: Smooth scroll to sections

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Future: Dark mode toggle logic can be added here
// script.js me add karo
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(fade => {
    const position = fade.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      fade.classList.add('visible');
    }
  });
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("service_umrsjod", "template_mx7z71m", this)
    .then(() => {
      alert("Email sent successfully!");
    }, (error) => {
      alert("Failed to send email. Try again.");
    });
});
  