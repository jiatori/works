// a 클릭 시 위로 튕김 제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//좌측 메뉴
$(function(){
    if(window.innerWidth > 1024) { //pc mode
        $(".menuClose").on('click', function(){
            $(".menu").addClass("on"); //공통) 메뉴 닫기
            $(".tab").addClass("on"); //pc) tab 좌측 이동
        }); 
        $(".menuOpen").on('click', function(){
            $(".menu").removeClass("on"); //공통) 메뉴 열기
            $(".tab").removeClass("on"); //pc) tab 우측 이동
        });
    } else { //tablet, mobile mode
        $(".menuClose").on('click', function(){ 
            $(".menu").removeClass("on");
            $(".wrap").removeClass("on"); //뒷 배경 원상복귀
        }); 
        $(".menuOpen").on('click', function(){
            $(".menu").addClass("on");
            $(".wrap").addClass("on"); //뒷 배경 흐려짐
        });
    }
});

// tabContent
$(function(){
    $('.tabcontent > .sectionWrap').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > .sectionWrap').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
    });

//인기 스토리 .new .top .slide
$(function() {
    $(".new .top .slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false, 
        fade: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        swipeToSlide:true,
        touchThreshold:30,
        //setPosition:0, //tab menu 깨짐 방지
        variableWidth: true //tab menu라 width 인식 못해서 넣어주기,
    });
})

//인기 스토리 .new .bottom .slide
$(function() {
    if(window.innerWidth > 767) {
        $(".new .bottom .slide").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            arrows: true,
            dots: false, 
            fade: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            swipeToSlide:true,
            touchThreshold:30,
            //setPosition:0, //tab menu 깨짐 방지
            variableWidth: true //tab menu라 width 인식 못해서 넣어주기,
        });
    } else {
        $(".new .bottom .slide").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            arrows: true,
            dots: false, 
            fade: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            swipeToSlide:true,
            touchThreshold:30,
            //setPosition:0, //tab menu 깨짐 방지
            variableWidth: true //tab menu라 width 인식 못해서 넣어주기,
        });
    } 
})

//인기 스토리 .cardSlide .slide
$(function() {
    if(window.innerWidth > 767) {
        $(".cardSlide .slide").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            arrows: true,
            dots: false, 
            fade: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            swipeToSlide:true,
            touchThreshold:30,
            //setPosition:0, //tab menu 깨짐 방지
            variableWidth: true //tab menu라 width 인식 못해서 넣어주기,
        });
    } else {
        $(".cardSlide .slide").slick({ //모바일에서는 dots 활성화
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            arrows: true,
            dots: true, 
            fade: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            swipeToSlide:true,
            touchThreshold:30,
            //setPosition:0, //tab menu 깨짐 방지
            variableWidth: true //tab menu라 width 인식 못해서 넣어주기,
        });
    }
})