$(function () {

    // NOT FINISHED

    $.ajax({
        url:"http://10.66.8.124:8888/test",
        type:"GET",
        dataType: "json",
        success: function(shop){
            console.log("recieved " +shop.name);

            var img = "<img id='logo_shop' class='float-left' src=' " + shop.url + ">";
            var name = "<h2 id='shop_name'>" +shop.name+ "</h2>";
            var blurb = "<p>" +shop.number+ " " +shop.owner+ "</p>";
            var descrip = "<p>" +shop.description+ "</p>";
            var cer = "<p>" +shop.certificate+ "</p>";
            var latitude = shop.lat;
            var longitude = shop.long;

            var txt = img + name + blurb + descrip + cer;
            
            $(".info").append(txt);


           
        
        }
    });


    function sumnum(num1, num2){
        return num1+num2;
    }

    

});

/*--------------------------------- MAP ---------------------------------*/
    // Initialize and add the map
    function initMap() {

        // The location of Uluru
        var uluru = { lat: 13.023, lng: 14.022 };

        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), { zoom: 15, center: uluru });

        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({ position: uluru, map: map });
    }

    /*--------------------------------------------------------------------------*/



