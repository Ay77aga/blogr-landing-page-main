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





let meida = window.matchMedia("(max-width: 767px)");
let img = document.querySelector('.future img');
let img2 = document.querySelector('.featur img');
if (meida.matches) {
  img.src = 'imgs/illustration-editor-mobile.svg'
  img2.src = 'imgs/illustration-laptop-mobile.svg'

}
let titles = document.querySelectorAll('section , footer ');
window.addEventListener('scroll', (e) => {
  titles.forEach(function(title) {
    if (scrollY >= title.offsetTop - 300) {
      title.classList.add('anim');
    }
  });
});
