$(document).ready(function(){
  let winW = $(window).width()
  let docW = $(document).width()
  console.log(winW)
  console.log(docW)

  // $('header').addClass('fixed')
  // $('header').removeClass('fixed')

  // TOP 버튼을 클릭했을 때 상단으로 스크롤
  $('aside button').on('click', function(){
    console.log('눌렀어')
    // $(window).scrollTop(100)
    $('html,body').animate({
      scrollTop : 0
    },500)
  })

  // 스크롤 되면 header에 클래스 추가
  let scrolling = $(window).scrollTop()

  $(window).scroll(function(){
    console.log(scrolling)
    headerixed()
  })

  function headerixed(){
    scrolling = $(window).scrollTop()
    if(scrolling > 0){
    $('header').addClass('fixed')
  }
  else {
    $('header').removeClass('fixed')
  }}

  $('header nav > ul').on('mouseenter focusin', function(){
    $('header').addClass('open')
  })
  $('header').on('mouseleave focusout', function(){
    $('header').removeClass('open')
  })
})