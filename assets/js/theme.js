const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light-theme';
  body.classList.add(savedTheme);
  updateToggleCircle(savedTheme === 'dark-theme');
});

themeSwitch.addEventListener('click', () => {
  const isDarkTheme = body.classList.toggle('dark-theme');
  const currentTheme = isDarkTheme ? 'dark-theme' : 'light-theme';
  localStorage.setItem('theme', currentTheme);
  updateToggleCircle(!isDarkTheme);
});

function updateToggleCircle(isDarkTheme) {
  const circle = document.querySelector('.toggle-circle');
  circle.style.transform = isDarkTheme ? 'translateX(44px)' : 'translateX(0px)';
}
