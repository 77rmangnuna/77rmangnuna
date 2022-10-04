/**
var slides= document.querySelectorAll("#slides > img");
var prev= document.getElementById("prev"); //querySelector("#")도 가능
var next= document.getElementById("next");
var current = 0;
showSlides(current); //현재 이미지 표시
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
  for (var i = 0; i < slides.length; i++) {  //반복
    slides[i].style.display= "none"; //모든 이미지 감춤
  }
    slides[n].style.display= "block";
}
 function prevSlide() {
    if(current > 0) current -= 1;   //0보다 크면 이전 위치로
    else current= slides.length -1; //첫위치면 마지막위치로
     showSlides(current);           //이동한 위치 보여주기
 }
function nextSlide() {
   if (current < slides.length -1) current +=1;
   else current = 0;
    showSlides(current);
  }
  **/
  //버튼 있는 버전
 var current = 0;
  showSlides();

  function showSlides() {
     var slides = document.querySelectorAll("#slides > img");
     for(let i= 0; i < slides.length; i++) {
       slides[i].style.display = "none"; //모든 이미지 감춤
     }
    current++; //다음 이미지로
    if (current > slides.length)
     current =1; //첫번째로
    slides[current -1].style.display = "block"; //현재 위치 이미지 표시
    setTimeout(showSlides, 2000);
    }
