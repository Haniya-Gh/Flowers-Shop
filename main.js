// Show a message when contact form is submitted
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent default submission (optional)

    // You can add real form submission here later (e.g., fetch or email service)

    alert('Your message has been sent! ✅');
    contactForm.reset(); // clear the form after submission
  });
}
