let icon = document.querySelector('.icon'),
  nav = document.querySelector('nav'),
  nav_ul_li = document.querySelectorAll('nav>ul>li');

icon.addEventListener('click', () => {
  nav.classList.toggle('active');
  icon.classList.toggle('active');
  nav_ul_li.forEach((l) => l.classList.remove('active'));
});

nav_ul_li.forEach((li) => {
  li.addEventListener('click', function(e) {
    if (!li.classList.contains('active'))
      nav_ul_li.forEach((l) => l.classList.remove('active'));
    this.classList.toggle('active');
  });
});
