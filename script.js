// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Hamburger toggle with ARIA attributes
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      hamburger.click();
    }
  });
});

// Dark mode toggle
const darkToggle = document.getElementById('dark-toggle');

darkToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  darkToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  darkToggle.setAttribute('aria-pressed', String(isDark));
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// On page load, apply saved theme
window.addEventListener('load', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    darkToggle.textContent = 'Light Mode';
    darkToggle.setAttribute('aria-pressed', 'true');
  }
});
