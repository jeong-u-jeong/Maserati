//mousewheel_event
$(function(){
    $('section').mousewheel(function(e, delta){ 
        if(delta > 0) { 
            let prev = $(this).prev().offset().top; 
            $('html, body').stop().animate({scrollTop: prev}, 800)
        } else if(delta < 0) {
            let next = $(this).next().offset().top; 
            $('html, body').stop().animate({scrollTop: next}, 800)
        }
    })
});


//lnb click_event
$(function(){
            
    const btn = $('.lnb li');
    const section = $('.wrap section');

    $('.lnb li a').click(function(e){
        e.preventDefault();
        $(window).scrollTo(this.hash || 0, 800);
    });

    $(window).scroll(function(){
        section.each(function(){
            let sectionPoint = $(window).scrollTop();
            let target = $(this);
            let i = target.index();

            if(sectionPoint >= target.offset().top) {
                btn.removeClass('on');
                btn.eq(i).addClass('on');
            }
        })
    }) 

});


//Home Swiper
let homeSwiper = new Swiper(".homeSwiper", {
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
        reachBeginning: function() {
            $('.homeSwiper .swiper-button-next').show();
            $('.homeSwiper .swiper-button-prev').hide();
        },
        reachEnd: function() {
            $('.homeSwiper .swiper-button-next').hide();
            $('.homeSwiper .swiper-button-prev').show();
        },
        slideChangeTransitionStart: function(){
			if (this.activeIndex == 1) {
                $('.homeSwiper .swiper-button-next').show();
                $('.homeSwiper .swiper-button-prev').show();
			}
        },   
        slideChangeTransitionEnd: function(){
			if (this.activeIndex == 0) {
                $('.slide2 .text_box').hide();
			}
			if (this.activeIndex == 1) {
                $('.slide2 .text_box').delay(500).fadeIn(600);
                $('.slide3 .p2').css('right', '-500px');
			}
			if (this.activeIndex == 2) {
                $('.slide2 .text_box').hide();
                $('.slide3 .p2').css('right', '50px');
			}
        }
    }
});
  

//window scroll_event
$(window).scroll(function() {
    if($(this).scrollTop() == $('.page02').offset().top) {
        $('.page02 .contents .ex').fadeIn(700);
        $('.page02 .contents .in').delay(700).fadeIn(700);
    } else {
        $('.page02 .contents .openPop').fadeOut();
    }

})


//Design popup
$(function(){

    let divEx = $('.page02 .contents .ex');
    let divIn = $('.page02 .contents .in');
    let exPopup = $('.page02 .ex_popup');
    let inPopup = $('.page02 .in_popup');
    let popup = $('.page02 .popup')
    let close = $('.page02 div .btn_close');

    divEx.on('click', function(){
        exPopup.css('right', '0px');
    });
    divIn.on('click', function(){
        inPopup.css('right', '0px');
    });
    $('.openPop').on('click', function(){
        popup.on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
        $("body").addClass('noScroll');
    });
    close.on('click', function(){
        popup.css('right', '-100%');
        $("body").removeClass('noScroll');
    });

});


//Design Swiper
let designSwiper = new Swiper(".designSwiper", {
    spaceBetween: 200,
    slidesPerView: "auto",
    slidesOffsetAfter:300,
    speed: 500,
});
