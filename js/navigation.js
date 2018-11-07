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

function clickloginMenu(){
    location.href="loginSignup3.html"
    
    $("#shopMenu p").removeClass("active");
    $("#foundMenu p").removeClass("active");
    $("#loginMenu p").addClass("active");
    $("#signupMenu p").removeClass("active");
}

function clicksignupMenu(){
    location.href="loginSignup3.html"
    
    $("#shopMenu p").removeClass("active");
    $("#foundMenu p").removeClass("active");
    $("#loginMenu p").removeClass("active");
    $("#signupMenu p").addClass("active");
}