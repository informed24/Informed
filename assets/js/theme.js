const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  const isDarkTheme = body.classList.contains('dark-theme');
  const circle = document.querySelector('.toggle-circle');
  if (!isDarkTheme) {
    circle.style.transform = 'translateX(44px)';
  } else {
    circle.style.transform = 'translateX(0px)';
  }
});
