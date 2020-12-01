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
  
  $('.mobile-staff').slick({
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow prev-mobile-staff" aria-label="Previous" type="button" style="">Previous</button>',
    nextArrow: '<button class="slick-next slick-arrow next-mobile-staff" aria-label="Next" type="button" style="">Next</button>',
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });