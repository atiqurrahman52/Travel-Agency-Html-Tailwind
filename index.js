

// 
$(document).ready(function () {
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){
        $('.nav').addClass('sticky')
    } else{
        $('.nav').removeClass('sticky')
    }
});


  $(".asia").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "200px",
    prevArrow: false,
    nextArrow: false,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "40px",
        },
      },
    ],
  });   


  $(".customer-logos").slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 8,
    autoplay: true,
    arrows: false,
    rows: 2,
    speed: 8000,
    autoplaySpeed:0,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });


// combo
  $(".combo").slick({
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "190px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  });

  // gallery
  $('.gallery_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite:true,
    speed: 1000,
    autoplaySpeed: 0,
    arrows: false,
    cssEase:"linear"
  });

  $('.gallery_slider').mouseover(function() {
    $(this).slick('play')
  });
  $('.gallery_slider').mouseout(function() {
    $(this).slick('pause')
  });

  // count up 
$('.count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.attr('data-stop') }, {
    duration: 2000,
    easing: 'swing',
    step: function (now) {
      $this.text(Math.ceil(now));
    }
  });
});
});




// menubar 
function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}


// Accordion started
let accordions = document.querySelectorAll('.accordion');
accordions[0].click();
      accordions.forEach(acco =>{
        accordions[0].click();
        acco.onclick =() => {
          accordions.forEach(subAcco =>{ subAcco.classList.remove('active')})
          acco.classList.add('active');
        }
      })