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


//상단 스크롤 프로그래스바(진행바)
$(function() {
    $("body").prognroll({
        height: 3,
        color: "#e21a22"
    });
    $(".content").prognroll({
        custom: true
    });
}); // 출처: https://esef.tistory.com/403 [굴리고 굴리는 블로그:티스토리]


//헤더 애니메이션
var scrollNum = 0; //변수선언
    scrollNum = $(document).scrollTop();
    fixHeader();

    function fixHeader(){ 
        if(scrollNum > 800){   //원하는 위치만큼 숫자 조정하기 !
            $("header").addClass("on"); 
        } else {
            $("header").removeClass("on");
        }
    }

    $(window).on('scroll resize', function(){ 
        scrollNum = $(document).scrollTop();
        fixHeader();
    });


//헤더 검색창 오픈 (클릭 시)
$(function(){ //제이쿼리 선언
    $(".searchOpen").on('click', function(){ //여기의 on은 아래와 위에 적은 on클래스랑 다른 것임! 이벤트를 불러오는 방법임! click하는 이벤트를 불러오기. menuOpen을 click하면 아래 함수가 실행된다.
        $(".search").addClass("on"); // gnb에 on 클래스를 더해준다 -> 메뉴 오픈
    }); 

    $(".close").on('click', function(){ //click하는 이벤트를 불러오기. close를 click하면 아래 함수가 실행된다.
        $(".search").removeClass("on"); //on 클래스를 지운다 -> 메뉴 클로즈
    });
});


//헤더 메뉴 오픈 (클릭 시)
$(function(){ //제이쿼리 선언
    $(".menuOpen").on('click', function(){ //여기의 on은 아래와 위에 적은 on클래스랑 다른 것임! 이벤트를 불러오는 방법임! click하는 이벤트를 불러오기. menuOpen을 click하면 아래 함수가 실행된다.
        $(".gnb2").addClass("on"); // gnb에 on 클래스를 더해준다 -> 메뉴 오픈
    }); 

    $(".close").on('click', function(){ //click하는 이벤트를 불러오기. close를 click하면 아래 함수가 실행된다.
        $(".gnb2").removeClass("on"); //on 클래스를 지운다 -> 메뉴 클로즈
    });
});


//이미지슬라이드
    $(function() {
        $(".rSeries .autoSlide").slick({
            arrows: true, //화살표
            dots: false, //인디케이터 해제
            fade: false, //페이드인 효과//false하면 옆으로 넘어가는 효과
            autoplay: false, //자동재생
            autoplaySpeed: 4000, //재생시간
            pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
		    pauseOnFocus:false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                    arrows: false
                    }
                }
                ]
        });
    }); 


// 이미지슬라이드
$(function() {
    $(".rSeries .tabSlide").slick({
        centerMode: true,
        arrows: false, //화살표
        dots: true, //인디케이터 해제
        fade: true, //페이드인 효과//true하면 옆으로 넘어가는 효과 사라짐
        autoplay: false, //자동재생
        autoplaySpeed: 4000, //재생시간
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
        pauseOnFocus:false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    fade: false
                }
            }
            ]
    });
}); 


//이미지슬라이드 
$(function() {
    $('.rfLens .tabSlide').slick({
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        arrows: true,

        responsive: [
        {
            breakpoint: 1279,
            settings: {
            centerPadding: '21%'
            }
        },
        {
            breakpoint: 1024,
            settings: {
            centerPadding: '25%'
            }
        },
        {
            breakpoint: 767,
            settings: {
            centerPadding: '0%',
            arrows: false
            }
        }
        ]
    });
}); 


//이미지슬라이드
$(function() {
    $(".scrollSlide").slick({
        arrows: false, //화살표
        dots: false, //인디케이터 해제
        fade: false, //페이드인 효과//false하면 옆으로 넘어가는 효과
        autoplay: true, //자동재생
        autoplaySpeed: 4000 //재생시간
    });
}); 


//이미지슬라이드
$(function() {
    $(".rEvent .slide").slick({
        rows: 1,
        infinite: false,
        variableWidth: true, //넣으면 슬라이드 너비 지정 후 센터오류 문제 해결 됨
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: true,
        autoplay: false,
        arrows: true, //화살표
        dots: true, //인디케이터 해제
    });
}); 