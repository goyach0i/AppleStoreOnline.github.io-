console.clear();

// hover 서브메뉴
function subMenu__init() {
  $('.menu-li').mouseenter(function () {
    let $this = $(this);
    $this.addClass('active');
    $this.find(' > .sub-menu').stop().slideDown(300);
  });

  $('.menu-li').mouseleave(function () {
    let $this = $(this);
    $this.removeClass('active');
    $this.find(' > .sub-menu').stop().slideUp(300);
  });
}

subMenu__init();

// 검색창 클릭
function searchBox__init() {
  $('.search-box > span').click(function () {
    let $this = $(this);

    if ($this.hasClass('active')) {
      $this.removeClass('active');
      $this.siblings('.sub-menu').stop().slideUp(300);
    } else {
      $this.addClass('active');
      $this.siblings('.sub-menu').stop().slideDown(300);
    }
  });

  $('.search-box').mouseleave(function () {
    let $this = $(this);
    $this.removeClass('active');
    $('.search-box > span').removeClass('active');
    $this.find(' > .sub-menu').stop().slideUp(300);
  });
}

searchBox__init();

// 장바구니 클릭
function shoppingBox__init() {
  $('.shopping-box > span').click(function () {
    let $this = $(this);
    if ($this.hasClass('active')) {
      $this.removeClass('active');
      $this.siblings('.sub-menu').stop().slideUp(300);
    } else {
      $this.addClass('active');
      $this.siblings('.sub-menu').stop().slideDown(300);
    }
  });

  $('.shopping-box').mouseleave(function () {
    let $this = $(this);
    $this.removeClass('active');
    $('.shopping-box > span').removeClass('active');
    $this.find(' > .sub-menu').stop().slideUp(300);
  });
}

shoppingBox__init();

// 슬라이드
// 왼쪽
  $('.new-product > .list > .left').click(function () {
    if ($('.new-product > .list > div').css('translate') == '0px') {
      $('.new-product > .list > div').css('translate', '0px');
      console.log($('.new-product > .list > div').css('translate') == '0px');
      return false;
    } else {
      $('.new-product > .list > div')
        .stop()
        .animate({ translate: '+=500px' }, 0);
    }
  });

  $('.help > .list > .left').click(function () {
    if ($('.help > .list > div').css('translate') == '0px') {
      $('.help > .list > div').css('translate', '0px');
      console.log($('.help > .list > div').css('translate') == '0px');
      return false;
    } else {
      $('.help > .list > div').stop().animate({ translate: '+=400px' }, 0);
    }
  });

  $('.apple-store > .list > .left').click(function () {
    if ($('.apple-store > .list > div').css('translate') == '0px') {
      $('.apple-store > .list > div').css('translate', '0px');
      return false;
    } else {
      $('.apple-store > .list > div')
        .stop()
        .animate({ translate: '+=400px' }, 0);
    }
    console.log($('.apple-store > .list > div').css('translate'));
  });

// 오른쪽
  $('.new-product > .list > .right').click(function () {
    if ($('.new-product > .list > div').css('translate') == '-3500px') {
      $('.new-product > .list > div').css('translate', '-3500px');
      return false;
    } else {
      $('.new-product > .list > div')
        .stop()
        .animate({ translate: '-=500px' }, 0);
    }
  });

  $('.help > .list > .right').click(function () {
    if ($('.help > .list > div').css('translate') == '-400px') {
      $('.help > .list > div').css('translate', '-400px');
      return false;
    } else {
      $('.help > .list > div').stop().animate({ translate: '-=400px' }, 0);
      console.log($('.help > .list > div').css('translate'));
    }
  });

  $('.apple-store > .list > .right').click(function () {
    if ($('.apple-store > .list > div').css('translate') == '-400px') {
      $('.apple-store > .list > div').css('translate', '-400px');
      return false;
    } else {
      $('.apple-store > .list > div')
        .stop()
        .animate({ translate: '-=400px' }, 0);
      console.log($('.apple-store > .list > div').css('translate'));
    }
  });

// 도움의 손길 팝업
function Popup__init() {
  // 열기
  $('.op-1').click(function () {
    $('.popup-1').addClass('active');
    $('html').addClass('actived');
  });
  $('.op-2').click(function () {
    $('.popup-2').addClass('active');
    $('html').addClass('actived');
  });
  $('.op-3').click(function () {
    $('.popup-3').addClass('active');
    $('html').addClass('actived');
  });
  $('.op-4').click(function () {
    $('.popup-4').addClass('active');
    $('html').addClass('actived');
  });
  $('.op-5').click(function () {
    $('.popup-5').addClass('active');
    $('html').addClass('actived');
  });
  $('.op-6').click(function () {
    $('.popup-5').addClass('active');
    $('html').addClass('actived');
  });

  // 닫기
  // 팝업 배경 클릭
  $('.popup').click(function () {
    if (
      $('.popup-1').css('opacity') == '1' ||
      $('.popup-2').css('opacity') == '1' ||
      $('.popup-3').css('opacity') == '1' ||
      $('.popup-3').css('opacity') == '1' ||
      $('.popup-4').css('opacity') == '1' ||
      $('.popup-5').css('opacity') == '1' ||
      $('.popup-6').css('opacity') == '1'
    ) {
      $('.popup-1').removeClass('active');
      $('.popup-2').removeClass('active');
      $('.popup-3').removeClass('active');
      $('.popup-4').removeClass('active');
      $('.popup-5').removeClass('active');
      $('.popup-6').removeClass('active');
      $('html').removeClass('actived');
    } else {
      return false;
    }
  });
  // 닫기 버튼 클릭
  $('.close').click(function () {
    if (
      $('.popup-1').css('opacity') == '1' ||
      $('.popup-2').css('opacity') == '1' ||
      $('.popup-3').css('opacity') == '1' ||
      $('.popup-3').css('opacity') == '1' ||
      $('.popup-4').css('opacity') == '1' ||
      $('.popup-5').css('opacity') == '1' ||
      $('.popup-6').css('opacity') == '1'
    ) {
      $('.popup-1').removeClass('active');
      $('.popup-2').removeClass('active');
      $('.popup-3').removeClass('active');
      $('.popup-4').removeClass('active');
      $('.popup-5').removeClass('active');
      $('.popup-6').removeClass('active');
      $('html').removeClass('actived');
    } else {
      return false;
    }
  });
}

Popup__init();
