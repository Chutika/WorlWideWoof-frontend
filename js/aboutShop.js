$(function () {


    var latitude;
    var longitude;


    $.ajax({
        url: "http://192.168.1.9:8888/test",
        type: "GET",
        dataType: "json",
        // data: {number: "additional Data"},
        success: function (shop) {
            console.log("recieved " + shop.shopName);

            var img = "<img id='logo_shop' class='float-left circle' src=' " + shop.url + "'>";

            var name = "<h2>" + shop.shopName + "</h2>";
            var blurb = "<p>" + shop.phoneNumber + " " + shop.firstName + " " + shop.lastName + "</p>";
            var description = "<p>" + shop.description + "</p>";
            var cer = "<p>" + shop.certificate + "</p>";
            latitude = shop.lat;
            longitude = shop.long;

            var intro = img + name + blurb;
            $("#intro-info-section").append(intro);
            $("#desc-info-section").append(description);
            $("#cer-info-section").append(cer);

            initMap();
        }
    });



    /*--------------------------------- MAP ---------------------------------*/
    // Initialize and add the map
    function initMap() {
   
        var location = { lat: latitude, lng: longitude };

        var map = new google.maps.Map(
            document.getElementById('map'), { zoom: 12, center: location });
    
        var marker = new google.maps.Marker({ position: location, map: map });
    }

    /*--------------------------------------------------------------------------*/



});







