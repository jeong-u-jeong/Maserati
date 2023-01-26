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
let swiper = new Swiper(".homeSwiper", {
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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
        }   
    }
});
  