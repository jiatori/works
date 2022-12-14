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


//헤더이벤트
    $(function(){ //제이쿼리 선언
        $(".menuOpen").on('click', function(){ //여기의 on은 아래와 위에 적은 on클래스랑 다른 것임! 이벤트를 불러오는 방법임! click하는 이벤트를 불러오기. menuOpen을 click하면 아래 함수가 실행된다.
            $(".gnb2").addClass("on"); // gnb에 on 클래스를 더해준다 -> 메뉴 오픈
        }); 

        $(".close").on('click', function(){ //click하는 이벤트를 불러오기. close를 click하면 아래 함수가 실행된다.
            $(".gnb2").removeClass("on"); //on 클래스를 지운다 -> 메뉴 클로즈
        });
    });


//.slideContents 이미지슬라이드
    $(function() {
        $(".slideContents.slide").slick({
            arrows: true, //화살표
            dots: false, //인디케이터 해제
            fade: false, //페이드인 효과
            autoplay: false, //자동재생
            autoplaySpeed: 4000, //재생시간
            pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
		    pauseOnFocus:false
        });
    }); 


//.marquee 이미지슬라이드
$(function() {
    $(".marquee .slide").slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        pauseOnHover: false,
        duplicated: true,
        arrows: false,
        buttons: false
    });
}); 


//.marquee 이미지슬라이드
$(function() {
    $('.roadmap .slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 875, // 화면의 넓이가 875px 까지
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }},
            { breakpoint: 540, // 화면의 넓이가 540px 까지
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                }
            },
            { breakpoint: 250, // 화면의 넓이가 250px 까지
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
                }
            }
        ]
    });
}); 



