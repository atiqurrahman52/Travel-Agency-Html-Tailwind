$('.asia').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  centerMode: true,
  centerPadding: '200px',
  prevArrow: false, nextArrow: false ,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerPadding: '40px',
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        centerPadding: '40px',
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        centerPadding: '40px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode:false,
        centerPadding: '40px',
        
       
      }
    }
  
  ]
});

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


// gallery 
$('#gallery').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  // autoplaySpeed: 0,
  // speed: 8000,
  pauseOnHover: false,
  infinite: true,
      // slidesToShow: 3,
      // slidesToScroll: 1,
      // speed: 500,
      centerMode: true,
      centerPadding: '200px',
  // cssEase: 'linear',
  responsive: [
                  {
                  breakpoint:768,
                  setting:{
                      slidesToShow: 2,
                  }
              },{
                  breakpoint:520,
                  setting:{
                      slidesToShow:1,
                      // slidesToScroll :2,
                  }
              },
              {
                  breakpoint:364,
                  setting:{
                      slidesToShow:1,
                  }
              },
          ]
});
