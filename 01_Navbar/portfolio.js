/* HEADER */
window.onload = function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 70) {
      var header = document.getElementById('header');
      if(!header.classList.contains('navbar-fixed')){
        header.classList.add('navbar-fixed');
        document.getElementsByTagName('body')[0].style.marginTop = '70px';
        header.style.display = 'none';
        setTimeout(function() {
          header.style.display = 'block';
        }, 40);
      }
    } else {
      var header = document.getElementById('header');
      if(header.classList.contains('navbar-fixed')){
        header.classList.remove('navbar-fixed');
        document.getElementsByTagName('body')[0].style.marginTop = '0';
      }
    }
}

function menuToggle(){
  document.getElementById('menu').classList.toggle('show');
}

document.getElementById('toggleBtn').addEventListener('click', menuToggle);

function moveTo(id) {
  if(id == 'home'){
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, document.getElementById(id).offsetTop - 70);
  }
  document.getElementById('menu').classList.remove('show');
}