$(document).ready(function() {
    $('.logo-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0, // 0 для безперервної анімації
        speed: 1000, // Швидкість анімації (регулюйте, щоб змінити швидкість руху)
        cssEase: 'linear',
        slidesToShow: 5,
        mobileFirst: true
        
    });
    
});
