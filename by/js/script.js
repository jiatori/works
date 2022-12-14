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

//index 고정헤더 스크롤 애니메이션
$(window).on('scroll resize', function(){
    var scrollPos = 0; //초기값 0
    scrollPos = $(document).scrollTop();
    //alert(scrollPos); //스크롤탑의 위치값 확인 (주석 풀어서 확인하기)

    fix();

    function fix(){
        if(scrollPos > 400){ //위에서 확인한 스크롤탑 위치값 넣기 -> 시작지점
            $('header').addClass('on');
        } else {
            $('header').removeClass('on');
        }
    }
});

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

//.top-visual 이미지슬라이드
    $(function() {
        $(".visual .slide").slick({
            arrows: true, //화살표
            dots: true, //인디케이터 해제
            fade: true, //페이드인 효과
            autoplay: true, //자동재생
            autoplaySpeed: 4000, //재생시간
            pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
		    pauseOnFocus:false
        });
    }); 

//.rooms 이미지슬라이드
$(function() {
    $(".rooms .slide").slick({
        arrows: true, //화살표
        dots: false, //인디케이터 해제
        fade: true, //페이드인 효과
        autoplay: false, //자동재생
        autoplaySpeed: 5000, //재생시간
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
        pauseOnFocus:false
    });
}); 

//.offers 이미지슬라이드
$(function() {
    $(".offers .slide").slick({
        arrows: true, //화살표
        slidesToShow: 3,
        autoplay: true, //자동재생
        autoplaySpeed: 2000 //재생시간
    });
}); 

//.facilities 이미지슬라이드
$(function() {
    $(".facil .slide").slick({
        arrows: true, //화살표
        slidesToShow: 3,
        autoplay: true, //자동재생
        autoplaySpeed: 2000 //재생시간
    });
}); 

//.dining 이미지슬라이드
$(function() {
    $(".dining .slide").slick({
        arrows: true, //화살표
        slidesToShow: 2,
        autoplay: true, //자동재생
        autoplaySpeed: 2000 //재생시간
    });
}); 

//rooms url 복사 버튼
function clip(){

    var url = '';    // <a>태그에서 호출한 함수인 clip 생성
    var textarea = document.createElement("textarea");  
    //url 변수 생성 후, textarea라는 변수에 textarea의 요소를 생성
    
    document.body.appendChild(textarea); //</body> 바로 위에 textarea를 추가(임시 공간이라 위치는 상관 없음)
    url = window.document.location.href;  //url에는 현재 주소값을 넣어줌
    textarea.value = url;  // textarea 값에 url를 넣어줌
    textarea.select();  //textarea를 설정
    document.execCommand("copy");   // 복사
    document.body.removeChild(textarea); //extarea 요소를 없애줌
    
    alert("URL이 복사되었습니다.")  // 알림창
}