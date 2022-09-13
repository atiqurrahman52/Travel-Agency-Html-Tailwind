// asia slider 
$(document).ready(function() {
  $('.asia').slick({
    autoplay: true,
    dots: false,
    // arrows: true,
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: '200px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1
        }
      }
    ]
  });
} )


// partners slider 
$(document).ready(function() {
    $('.customer-logos').slick({
        dots: false,
        infinite: true,
        autoplaySpeed: 1500,
        slidesToShow: 8,
        autoplay:true,
        arrows:false,
        rows: 2,
        speed: 8000,
        pauseOnHover: true,
        cssEase: 'linear',
        responsive: [
        
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            
            }
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 4,
              
            }
          }
          
        ]
      });
});

