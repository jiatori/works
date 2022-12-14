'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//gnb 메뉴 
$(function() {
	$('header .menuOpen').on('click', function(){
		$('.gnb').addClass('on');
	});
	$('.gnb .close, section').on('click', function() { //닫기버튼과 섹션영역 클릭시 제거
		$('.gnb').removeClass('on');
	});
});

//fixHeader
var scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();
//윈도우창 조절시 이벤트
$(window).on('scroll resize', function() {
    scrollTop = $(document).scrollTop();
    fixHeader();
});

//고정헤더 함수
function fixHeader() {
    if (scrollTop > 150) { 
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}

// 스크롤 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: true //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 	

//상단이동 부드럽게
$(function() {            
    $('.goTop').on('click', function() {
        var top = $('body').offset().top;
        $('html, body').animate( { scrollTop : (top) }, 400 );  
    });     
});  



//헤더 스크롤 이벤트
var scrollNum = 0; //변수선언
    scrollNum = $(document).scrollTop();  //document의 scrolltop값이 scrollnum변수에 대입 됨 //document, window는 제이쿼리 자체 단어라 .이나 따옴표 붙이지 않음
    fixHeader();

    function fixHeader(){ //fixHeader 함수 만들기
        if(scrollNum > 150){ //scrollNum이 150보다 크면
            $("header").addClass("on"); //헤더에 on클래스가 더해지고
        } else {
            $("header").removeClass("on"); //아니면, on클래스가 삭제된다
        }
    }

    //윈도우창 조절 시 이벤트
    $(window).on('scroll resize', function(){  //스크롤, 리사이즈 할 때 이벤트를 불러오기 //document, window는 제이쿼리 자체 단어라 .이나 따옴표 붙이지 않음
        scrollNum = $(document).scrollTop();
        fixHeader();
    });



//.top-visual 이미지슬라이드
    $(function() {
        var $slideshow = $('.visual .slide');
        var ImagePauses = [4000, 12000, 4000, 4000, 17000];
        $(".visual .slide").slick({
            arrows: true, //화살표
            dots: false, //인디케이터 해제
            fade: true, //페이드인 효과
            autoplay: true, //자동재생
            autoplaySpeed: ImagePauses[0], //재생시간
            pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
		    pauseOnFocus:false
        });
        
        // Sliding settings
        $slideshow.on('afterChange', function(event, slick, currentSlide) {
        // Console log, can be removed
        console.log('Current slide: ' + currentSlide + '. Setting speed to: ' + ImagePauses[currentSlide]);
        // Update autoplay speed according to slide index
        $slideshow.slick('slickSetOption', 'autoplaySpeed', ImagePauses[currentSlide], true);
        });
    }); 
    //슬라이드별 autoplaySpeed 다르게 적용 참고사이트 : https://jsfiddle.net/teddyrised/vxxhnga5/7/



//.service 이미지슬라이드
$(function() {
    $(".marqueeTop .slide").slick({
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        pauseOnHover: true,
        arrows: false,
        buttons: false
    });
}); 


//.service 이미지슬라이드
$(function() {
    $(".marqueeBottom .slide").slick({
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        pauseOnHover: true,
        arrows: false,
        buttons: false,
        rtl: true
    });
}); 