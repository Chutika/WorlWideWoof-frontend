function clickLogo(){
    //route page
    location.href="landingPage.html"

    //set current nav-menu
    $("#shopMenu p").removeClass("active");
    $("#foundMenu p").removeClass("active");
    $("#loginMenu p").removeClass("active");
    $("#signupMenu p").removeClass("active");
}

function clickShopMenu(){
    location.href="forSale.html"
   
    $("#shopMenu p").addClass("active");
    $("#foundMenu p").removeClass("active");
    $("#loginMenu p").removeClass("active");
    $("#signupMenu p").removeClass("active");

}
function clickFoundationMenu(){
    location.href="forAdopt.html"
    
    $("#shopMenu p").removeClass("active");
    $("#foundMenu p").addClass("active");
    $("#loginMenu p").removeClass("active");
    $("#signupMenu p").removeClass("active");
}

function goToDogInfo(){
    location.href="dogInfo.html"
}