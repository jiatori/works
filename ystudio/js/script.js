 //1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//2.슬라이드
$(function() { //제이쿼리 선언함
    $(".visual .slide").slick({ //슬릭을 호출하겠다 
        arrows: true, //falce:화살표 사용안함
        dots: false, //true:닷츠 사용함
        autoplay: true, //true: 자동재생 사용함
        fade: true, //true: 페이드인 효과 사용함        
        autoplaySpeed: 4000, //재생시간. 5000:5초
        pauseOnHover:false, //마우스 오버시 슬라이드 -false:멈춤 해제
       pauseOnFocus:false //포커스시 슬라이드 - false:멈춤 해제
    }); //필요한 옵션들을 골라서 적으면 됨! 마지막것은 콤마(,) 안찍음!!!!
}); 

//.3.scroll 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: true //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 