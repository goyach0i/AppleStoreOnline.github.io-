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
    return false;
  } else {
    $('.new-product > .list > div').stop().animate({ translate: '+=500px' }, 0);
  }
  console.log($('.new-product > .list > div').css('translate'));
});
// 오른쪽
$('.new-product > .list > .right').click(function () {
  let count = 0;
  if ($('.new-product > .list > div').css('translate') == '-3500px') {
    $('.new-product > .list > div').css('translate', '-3500px');
    return false;
  } else {
    $('.new-product > .list > div').stop().animate({ translate: '-=500px' }, 0);
  }
});
