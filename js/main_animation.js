$(function(){
    // $('.main_slide').slick({
    //     arrows: false,
    //     autoplay: true,
       
    // });
    
    // $('.main_slide .slick-current').addClass('on');

    // $('.main_slide').on('afterChange', function () {
    //     let _this = $('.main_slide.slick-current');
    //     _this.addClass('on').siblings().removeClass('on');
    // })

    const model = ['ioniq', 'gasper', 'sonata'];
    $('.main_slide').on('init afterChange', function(e,s,c){
        let _this = $(this).find('.slick-current');
        _this.addClass('on').siblings().removeClass('on');
        $('#main_visual .num').text(c ? c + 1 : 1)
        $('#main_visual .model').text(c ? model[(c + 1) % model.length] : model[1]);
    });
    // afterChange는 init을 데리고 다님
    $('.main_slide') .slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    });

    $('#main_visual .model').on('click', function () {
        $('.main_slide').slick('slickNext');   
    });
});