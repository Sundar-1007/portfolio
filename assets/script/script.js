var iconbtn = $('.box');

iconbtn.on('click', function () {
  $(iconbtn).toggleClass('active not-active');
});

$('.nav-item .nav-link').click(function () {
  $('.nav-item .nav-link').removeClass('active');
  $(this).addClass('active')
});

$(window).on('scroll', function () {
  $(iconbtn).addClass('not-active');
  $(iconbtn).removeClass('active');
})

// $(window).scroll(function() {
//     var scrollTop = $(window).scrollTop(); // Get the current scroll position
//     var viewportHeight = $(window).height(); // Get the viewport height


//     var active = $('aside .nav-link.active'); 

//     if (scrollTop > viewportHeight) {
//         $('.nav-link[href="#home"]').removeClass('active').parent().next().children().addClass('active');
//     } else if(scrollTop > viewportHeight * 2) {
//         $('.nav-link[href="#about"]').removeClass('active').parent().next().children().addClass('active');
//     }else{}
//   });

$(document).ready(function () {
  $(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    var section1Offset = $('#home').offset().top;
    var section2Offset = $('#about').offset().top;
    var section3Offset = $('#skills').offset().top;
    var section4Offset = $('#exp').offset().top;
    var section5Offset = $('#edu').offset().top;
    // var section6Offset = $('#contact').offset().top;

    // Add/remove "nav-active" class based on scroll position
    if (scrollDistance >= section1Offset && scrollDistance < section2Offset) {
      $('.nav-link ').removeClass('active');
      $('.nav a[href="#home"]').addClass('active');
    } else if (scrollDistance >= section2Offset && scrollDistance < section3Offset) {
      $('.nav-link').removeClass('active');
      $('.nav a[href="#about"]').addClass('active');
    } else if (scrollDistance >= section3Offset && scrollDistance < section4Offset) {
      $('.nav-link ').removeClass('active');
      $('.nav a[href="#skills"]').addClass('active');
    } else if (scrollDistance >= section4Offset && scrollDistance < section5Offset) {
      $('.nav-link ').removeClass('active');
      $('.nav a[href="#exp"]').addClass('active');
    } else if (scrollDistance >= section5Offset+section1Offset) {
      $('.nav-link ').removeClass('active');
      $('.nav a[href="#edu"]').addClass('active');
    }
    // else if (scrollDistance >= section6Offset+section1Offset) {
    //   $('.nav-link ').removeClass('active');
    //   $('.nav a[href="#contact"]').addClass('active');
    // }
  });
});


var date = new Date();
let year = date.getFullYear();
setInterval(function(){
  document.getElementById('year').innerHTML = year;
}, 10000)

AOS.init(); 