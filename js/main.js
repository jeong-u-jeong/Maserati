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
    };

    let lab1Title2 = $('.page03 .contents .container_box .container1 .title2');

    if($(this).scrollTop() == $('.page03').offset().top) {
        lab1Title2.css('left', '90px');
    } else {
        lab1Title2.css('left', '-500px');
    };

    let imgBox1 = $('.page04 .contents .container div .img_box1');
    let imgBox2 = $('.page04 .contents .container div .img_box2');
    let imgBox3 = $('.page04 .contents .container div .img_box3');
    let imgBox4 = $('.page04 .contents .container div .img_box4');
    
    if($(this).scrollTop() == $('.page04').offset().top) {
        imgBox1.fadeIn(500);
        imgBox2.delay(500).fadeIn(500);
        imgBox3.delay(1000).fadeIn(500);
        imgBox4.delay(1500).fadeIn(500);
    } else {
        $('.page04 .contents .container div .img_box').fadeOut();
    };
    if($(this).scrollTop() == $('.page05').offset().top) {
        $('.page05 .contents .title_box .title2').css('right', '0');
    } else {
        $('.page05 .contents .title_box .title2').css('right', '-100%');
    };

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


//page3_tab
$(function(){

    $('.lab1').on('click', function(){
        $('.page03 .contents .container_box .container1 .title2').show();
        $('.page03 .contents .container_box .container1 .title2').css('left', '90px');
    });
    $('.lab1').siblings().on('click', function(){
        $('.page03 .contents .container_box .container1 .title2').hide();
        $('.page03 .contents .container_box .container1 .title2').css('left', '-500px');
    });
    $('.lab3').on('click', function(){
        $('.page03 .contents .container_box .container3 div .img_box img').fadeIn(1000);
        $('.page03 .contents .container_box .container3 div .text_box p ').delay(1000).fadeIn(1000);
    });
    $('.lab3').siblings().on('click', function(){
        $('.page03 .contents .container_box .container3 div .img_box img').fadeOut();
        $('.page03 .contents .container_box .container3 div .text_box p ').fadeOut();
    });
    $('.lab4').on('click', function(){
        $('.page03 .contents .container_box .container4 .title2').show();
        $('.page03 .contents .container_box .container4 .title2').css('left', '60px');
    });
    $('.lab4').siblings().on('click', function(){
        $('.page03 .contents .container_box .container4 .title2').hide();
        $('.page03 .contents .container_box .container4 .title2').css('left', '-500px');
    });
});


//page3_display
$(function(){
    const dot1 = $('.page03 .contents .container_box .container2 .dot1');
    const dot2 = $('.page03 .contents .container_box .container2 .dot2');
    const dot3 = $('.page03 .contents .container_box .container2 .dot3');
    const dot4 = $('.page03 .contents .container_box .container2 .dot4');
    const text1 = $('.page03 .contents .container_box .container2 .text1');
    const text2 = $('.page03 .contents .container_box .container2 .text2');
    const text3 = $('.page03 .contents .container_box .container2 .text3');
    const text4 = $('.page03 .contents .container_box .container2 .text4');

    dot1.mouseover(function(){
        text1.fadeIn();
    });
    dot2.mouseover(function(){
        text2.fadeIn();
    });
    dot3.mouseover(function(){
        text3.fadeIn();
    });
    dot4.mouseover(function(){
        text4.fadeIn();
    });
    $('.page03 .contents .container_box .container2 .dot').mouseout(function(){
        $('.page03 .contents .container_box .container2 .text').fadeOut();
    });
});


//page3_connect
$(function(){
    const videoDiv = $('.page03 .contents .container_box .container4 .video')
    const img = $('.page03 .contents .container_box .container4 .video img')

    videoDiv.hover(function(){
        img.fadeOut();
    }, function() {
        img.fadeIn();
    });

    const drop = $('.page03 .contents .container_box .container4 .text_box .drop_box .drop')

    drop.on('click', function(){
        $(this).css('height', '331px');
        $(this).find('.plus').hide();
        $(this).find('.minus').show();
        $(this).siblings().css('height', '70px');
        $(this).siblings().find('.plus').show();
        $(this).siblings().find('.minus').hide();
    });
    
    // $('.minus').on('click', function(){
    //     $(this).parent().css('height', '70px');
    // });
});

