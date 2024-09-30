// Check if user has set a theme before
let currentTheme = localStorage.getItem('theme');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

// Apply the saved theme on load
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    themeIcon.textContent = 'light_mode';
    themeText.textContent = 'Light';
    themeToggle.classList.remove('is-dark');
    themeToggle.classList.add('is-light');
  } else {
    themeIcon.textContent = 'dark_mode';
    themeText.textContent = 'Dark';
    themeToggle.classList.remove('is-light');
    themeToggle.classList.add('is-dark');
  }
}

// Toggle theme function
themeToggle.addEventListener('click', function() {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeIcon.textContent = 'dark_mode';
    themeText.textContent = 'Dark';
    themeToggle.classList.remove('is-light');
    themeToggle.classList.add('is-dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeIcon.textContent = 'light_mode';
    themeText.textContent = 'Light';
    themeToggle.classList.remove('is-dark');
    themeToggle.classList.add('is-light');
  }
});
