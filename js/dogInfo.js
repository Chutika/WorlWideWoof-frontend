var slideIndex = 1;
showSlides(slideIndex);

function clickLogo(){
    location.href="dogInfo.html"
}

function clickShopMenu(){
    // location.href="dogInfo.html"
    document.getElementById("shopMenu").style.backgroundColor = "#F1D102";
    document.getElementById("foundMenu").style.backgroundColor = "#FFE32E";
    document.getElementById("shopMenu").style.fontWeight="500";
    document.getElementById("foundMenu").style.fontWeight="normal";

}
function clickFoundationMenu(){
    // location.href="dogInfo.html"
    document.getElementById("shopMenu").style.backgroundColor = "#FFE32E";
    document.getElementById("foundMenu").style.backgroundColor = "#F1D102";
    document.getElementById("shopMenu").style.fontWeight="normal";
    document.getElementById("foundMenu").style.fontWeight="500";
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
    if (n==1){
        document.getElementById("Labrador").src="https://dynaimage.cdn.cnn.com/cnn/w_768,h_1024,c_scale/https%3A%2F%2Fdynaimage.cdn.cnn.com%2Fcnn%2Fx_1085%2Cy_0%2Cw_2578%2Ch_3437%2Cc_crop%2Fhttps%253A%252F%252Fstamp.static.cnn.io%252F5b7ac48b4db3d70020c01c13%252Fshutterstock_757946224.jpg";
    }
    else if(n==2){
        document.getElementById("Labrador").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8n0D7Pb8Ns73Ztu_utsish7QxmgTy99PVuGNUzqQQfZJsSNn"
    }
    else if(n==3){
        document.getElementById("Labrador").src="https://dynaimage.cdn.cnn.com/cnn/w_768,h_1024,c_scale/https%3A%2F%2Fdynaimage.cdn.cnn.com%2Fcnn%2Fx_1229%2Cy_0%2Cw_2712%2Ch_3616%2Cc_crop%2Fhttps%253A%252F%252Fstamp.static.cnn.io%252F5b7ac48b4db3d70020c01c13%252Fshutterstock_1081879181.jpg"
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
  dots[n-1].className += " active";
}
