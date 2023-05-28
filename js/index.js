$(document).ready(function(){
    $('.examples__slider').slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        slidesToShow: 3,       
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,  
        responsive: [
            {
            breakpoint: 768,
            settings:{
                slidesToShow: 2,
            }
            }
        ]
    });
})