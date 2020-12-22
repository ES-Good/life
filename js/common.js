const countSlide = document.getElementById('counted__num');
const slideAllText = document.getElementById('all-slide')
const slideAllCertificates = document.querySelectorAll('.img-certificats');

const countSlideStaff = document.getElementById('counted__num-staff');
const slideAllStaff = document.querySelectorAll('.staff-name');
const slideAllTextStaff = document.getElementById('all-slide-staff');


$('.gallery-reviews').slick({
    dots: true,
    dotsClass: 'slick-dots dots-reviews',
    prevArrow: '<button class="slick-prev slick-arrow prev-reviews" aria-label="Previous" type="button" style="">Previous</button>',
    nextArrow: '<button class="slick-next slick-arrow next-reviews" aria-label="Next" type="button" style="">Next</button>',
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

  $('.certificates').slick({
    dots: true,
    dotsClass: 'slick-dots dots-certificates',
    prevArrow: '<button class="slick-prev slick-arrow prev-certificates" aria-label="Previous" type="button" style="">Previous</button>',
    nextArrow: '<button class="slick-next slick-arrow next-certificates" aria-label="Next" type="button" style="">Next</button>',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  slideAllText.innerText = slideAllCertificates.length;
  slideAllTextStaff.innerText = slideAllStaff.length;


  $('.certificates').on('afterChange', function(event, slick, currentSlide, nextSlide){ //счётчик слайдов
    countSlide.innerText = currentSlide + 1;
  });

  $('.mobile-staff').on('afterChange', function(event, slick, currentSlide, nextSlide){ //счётчик слайдов
    countSlideStaff.innerText = currentSlide + 1;
  });
  
  $('.mobile-staff').slick({
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow prev-mobile-staff" aria-label="Previous" type="button" style="">Previous</button>',
    nextArrow: '<button class="slick-next slick-arrow next-mobile-staff" aria-label="Next" type="button" style="">Next</button>',
    dotsClass:'slick-dots slick-dots_staff',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

const menuItem = document.querySelectorAll('.nav-link');

for (let i = 0; i < menuItem.length; i++) {
  const element = menuItem[i];
  
  element.onclick = function (){
    document.querySelector('.navbar-collapse').classList.remove('show')
  }
}