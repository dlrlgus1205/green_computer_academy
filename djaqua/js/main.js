$(document).ready(function(){
    let scrolling;

    let fixObj = $('.exp h2'); //고정요소
    let fixArea = $('.exp'); //고정요소를 감싸는 영역
    let fixTop = 120; //css에서 fixed에 준 top값
    let fixBtm = 0; //css에서 end에 준 bottom값
    let fixStart; //fixed 시작점
    let fixEnd; //fixed 종료점
    // console.log(fixStart, 'fixStart');
    // console.log(fixEnd, 'fixEnd');

    objFixed();

    $(window).scroll(function(){
        objFixed();
    });

    $(window).resize(function(){
        objFixed();
    });

    function objFixed(){
        // console.log(scrolling);
        scrolling = $(window).scrollTop();
        fixStart = fixArea.offset().top - fixTop;
        fixEnd = fixArea.offset().top + fixArea.height() - fixObj.height() - fixBtm - fixTop;

        if(scrolling < fixStart){ // 위에서 부터 tit이 고정되기 전
            fixObj.removeClass('fixed');
            fixObj.removeClass('end');
        }else if((scrolling >= fixStart) && (scrolling < fixEnd)){ //tit이 고정될때
            fixObj.addClass('fixed');
            fixObj.removeClass('end');
        }else{ //고정된 이후
            fixObj.removeClass('fixed');
            fixObj.addClass('end');
        }
    }

    const swiper = new Swiper('.display .dp', {

      effect: "fade", /* fade 효과 */

      autoplay: {  /* 팝업 자동 실행 */
          delay: 3000,
          disableOnInteraction: true,
      },

      loop: true  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

  });

})

