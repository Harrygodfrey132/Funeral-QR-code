// Get all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Add click event listener to each FAQ question
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    // Toggle the display of the next element (the answer)
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

    // Toggle the arrow icon direction
    const arrow = question.querySelector('.arrow');
    arrow.textContent = arrow.textContent === '▼' ? '▲' : '▼';
  });
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
