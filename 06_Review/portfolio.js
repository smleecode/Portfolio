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

/* WELCOME AREA */
var imageSlideIndex = 1;
showImageSlides(imageSlideIndex);

function imageSlideTimer() {
  plusImageSlides(1);
}

var imageTimer = setInterval(imageSlideTimer, 3000);

function plusImageSlides(n) {
  clearInterval(imageTimer);
  imageTimer = setInterval(imageSlideTimer, 3000);

  showImageSlides(imageSlideIndex += n);
}

function currentImageSlide(n){
  clearInterval(imageTimer);
  imageTimer = setInterval(imageSlideTimer, 3000);

  showImageSlides(imageSlideIndex = n);
}

function showImageSlides(n) {
  var i;
  var slides = document.getElementsByClassName('image-slide');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {imageSlideIndex = 1}    
  if (n < 1) {imageSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[imageSlideIndex-1].style.display = 'block';  
  dots[imageSlideIndex-1].className += ' active';
}

document.getElementById('imagePrev').addEventListener('click', plusImageSlides.bind(null,-1));
document.getElementById('imageNext').addEventListener('click', plusImageSlides.bind(null,1));

document.getElementById('firstDot').addEventListener('click', currentImageSlide.bind(null,1));
document.getElementById('secondDot').addEventListener('click', currentImageSlide.bind(null,2));
document.getElementById('thirdDot').addEventListener('click', currentImageSlide.bind(null,3));
document.getElementById('forthDot').addEventListener('click', currentImageSlide.bind(null,4));


/* PORTFOLIO AREA */
filterSelection({"target":{"id":"all"}});

function filterSelection(event) {
  var x, i, c;
  c = event.target.id;

  x = document.getElementsByClassName('listItem');
  for(i=0;i<x.length;i++){
    removeClass(x[i], 'active');
  }
  addClass(document.getElementById(c), 'active');

  x = document.getElementsByClassName('filterItem');
  if(c == 'all') c = '';
  for(i=0;i<x.length;i++){
    removeClass(x[i], 'show');
    if(x[i].className.indexOf(c) > -1)
      addClass(x[i], 'show');
  }
}

function addClass(element, name) {
    if(element.className.indexOf(name) == -1) {
      element.className += " " + name;
    }
}

function removeClass(element, name) {
  var arr;
  arr = element.className.split(" ");

 while(arr.indexOf(name) > -1){
   arr.splice(arr.indexOf(name), 1);
 }
 
 element.className = arr.join(" ");
}

document.getElementById('all').addEventListener('click', filterSelection);
document.getElementById('uiux').addEventListener('click', filterSelection);
document.getElementById('java').addEventListener('click', filterSelection);
document.getElementById('db').addEventListener('click', filterSelection);

function viewPortfolio(event) {
  var img = event.target.nextElementSibling.src;
  var main = event.target.parentNode.nextElementSibling.innerHTML;
  var sub = event.target.parentNode.nextElementSibling.nextElementSibling.innerHTML;
  var text = event.target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;

  document.getElementById('modalImage').src = img;
  document.getElementById('modalMain').innerHTML = main;
  document.getElementById('modalSub').innerHTML = sub;
  document.getElementById('modalText').innerHTML = text;

  document.getElementById('portfolioModal').style.display = 'block';
}

document.getElementById('modalClose').addEventListener('click', function(){
  document.getElementById('portfolioModal').style.display = 'none';
});

var filterItems = document.getElementsByClassName('overlay');

for(var i=0;i<filterItems.length;i++){
  filterItems[i].addEventListener('click', viewPortfolio);
}

/* REVIEW AREA */
var reviewSlideIndex = 0;
showReviewSlides(reviewSlideIndex);

function reviewSlideTimer() {
  plusReviewSlides(1);
}

var reviewTimer = setInterval(reviewSlideTimer, 3000);

function plusReviewSlides(n) {
  clearInterval(reviewTimer);
  reviewTimer = setInterval(reviewSlideTimer, 3000);
  showReviewSlides(reviewSlideIndex += n);
}

function showReviewSlides(n) {
  var i;
  var review_slides = document.getElementsByClassName('review-slide');
  var review_slides_length = review_slides.length;

  if (n > review_slides_length - 3) {
    reviewSlideIndex = 0;
  }

  if (n < 0) {
    reviewSlideIndex = review_slides_length - 3;
  }

  for (i = 0; i < review_slides_length; i++) {
    removeClass(review_slides[i], 'show');
    removeClass(review_slides[i], 'res-show');
    addClass(review_slides[i], 'hide');
  }
  
  removeClass(review_slides[reviewSlideIndex], 'hide');
  addClass(review_slides[reviewSlideIndex], 'res-show');
  removeClass(review_slides[reviewSlideIndex+1], 'hide');
  addClass(review_slides[reviewSlideIndex+1], 'show');
  removeClass(review_slides[reviewSlideIndex+2], 'hide');
  addClass(review_slides[reviewSlideIndex+2], 'show');
  
}

/* ANCHOR */
function moveTo(id) {
  if(id == 'brand'){
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, document.getElementById(id).offsetTop - 70);
  }
  document.getElementById('menu').classList.remove('show');
}

document.getElementById('navbarBrand').addEventListener('click', moveTo.bind(null,'brand'));
document.getElementById('navbarAbout').addEventListener('click', moveTo.bind(null,'about'));
document.getElementById('navbarService').addEventListener('click', moveTo.bind(null,'service'));
document.getElementById('navbarPortfolio').addEventListener('click', moveTo.bind(null,'portfolio'));
document.getElementById('navbarReview').addEventListener('click', moveTo.bind(null,'review'));