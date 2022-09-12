$(document).ready(function() {
    $('.customer-logos').slick({
        dots: false,
        // infinite: false,
        autoplaySpeed: 1500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
        pauseOnHover: false,
        responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            
            }
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 4,
              
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});
