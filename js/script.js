
$('.main__carousel').slick({
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
       breakpoint: 861,
       settings: {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true
      }
    },
    {
      breakpoint: 481,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
     }
    },
    
  ]
});


let navContest = document.querySelector('.header__nav-contest'),
    navTable = document.querySelector('.header__nav-table');

if ($(window).width() < 769) {
  navContest.innerHTML = 'Правила';
  navTable.innerHTML = 'Участники';
}


