// initialize and configuration for wow js - animations
wow = new WOW({
    animateClass: 'animated',
    offset: 150,
    mobile: true,
    callback: function(box) {
        //console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();

// initialize tooltips and popovers
$(function () {
$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle=popover]').popover();
})

// js counters
$('#about-counter').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
    if (visible) {
        $(this).find('.timer').each(function() {
            var $this = $(this);
            $({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        $(this).unbind('inview');
    }
});
 
// cart widget toggle
$(function() {
    $("#items-counter").click(function() {
        $("body").toggleClass("cart-widget-open");
    });
    $("#cart-widget-close").click(function() {
        $("body").toggleClass("cart-widget-open");
    });

        $(".cart-widget-close-overlay").click(function() {
        $("body").toggleClass("cart-widget-open");
    });

});

//initialize swipers
//home slider
var swiper = new Swiper('.home-slider', {
    pagination: '.home-pagination',
    paginationClickable: true,
//    nextButton: '.home-slider-next',
    autoplay: 7500,
    speed: 7500,
    autoplayDisableOnInteraction: false,
//    effect: 'fade',
//    prevButton: '.home-slider-prev'
});

//testimonials slider
var swiper = new Swiper('.testimonials-slider', {
    pagination: '.testimonials-pagination',
    paginationClickable: true,
    slidesPerView: 1,
    spaceBetween: 5,
    nextButton: '.testimonials-slider-next',
    prevButton: '.testimonials-slider-prev'
});

//transformation slider
var swiper = new Swiper('.transformation-slider', {
    pagination: '.transformation-pagination',
    paginationClickable: true,
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 1,
    autoplay: 2500,
    speed: 2500,
    autoplayDisableOnInteraction: false,
  //  effect: 'fade',
//    nextButton: '.testimonials-slider-next',
//    prevButton: '.testimonials-slider-prev'
});

// product list
var swiper = new Swiper('.product-list-slider', {
    slidesPerView: 3,
    pagination: '.product-list-pagination',
    paginationClickable: true,
    nextButton: '.product-list-slider-next',
    prevButton: '.product-list-slider-prev',
  //  autoHeight: true,
    autoplay: 4500,
    speed: 2500,
    autoplayDisableOnInteraction: true,
    spaceBetween: 7,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        420: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});

//post slider
var swiper = new Swiper('.post-slider', {
    pagination: '.post-pagination',
    paginationClickable: true,
    nextButton: '.post-slider-next',
    prevButton: '.post-slider-prev',
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});

// smoth scroll
$(".navbar-nav li a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 25) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});