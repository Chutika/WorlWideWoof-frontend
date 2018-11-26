var slideIndex = 1;
showSlides(slideIndex);
// Thumbnail image controls
function currentSlide(n) {
  showSlides(n);
}

function clickSameDog() {
  location.href = "dogInfo.html";
}

function goToPage() {
  location.href = "shopInfo.html";
}

function gotoInfoShop() {
  location.href = "shopInfo.html";
}

function showSlides(n) {
  if (n == 1) {
    document.getElementById("mainPicture").src =document.getElementById("fontSide").src;
  } else if (n == 2) {
    document.getElementById("mainPicture").src =document.getElementById("picTwo").src;
  } else if (n == 3) {
    document.getElementById("mainPicture").src =document.getElementById("picThree").src;
  }
  var i;
  //   var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  //   if (n > slides.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //   slides[slideIndex-1].style.display = "block";
  dots[n - 1].className += " active";
}
