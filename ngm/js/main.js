$(document).ready(function(){
    const swiper = new Swiper('.popup', {
  
        effect: "fade",
  
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
  
        loop: true,
  
        pagination: {
            el: '.btn_paging',
            clickable: true,
        },
  
    });
  
    $('.popup .btn_stop').on('click', function(){
        if($(this).hasClass('play') == true){
            swiper.autoplay.start();
            $(this).removeClass('play');
            $(this).text('일시정지');
        }else{
            swiper.autoplay.stop();
            $(this).addClass('play');
            $(this).text('재생');
        }
        console.log('누름');
    });
});