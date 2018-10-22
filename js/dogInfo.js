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