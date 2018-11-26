$(function(){
    alert("edit connect");
    var map;
    var marker;

    initMap();  

    function initMap() {
      //bangkok 13.752450, 100.497571
      var myLatlng = new google.maps.LatLng(13.752450, 100.497571);

      map = new google.maps.Map(document.getElementById('map'), {
        center: myLatlng,
        zoom: 12
      });

      google.maps.event.addListener(map, 'click', function (event) {
        
        var lat = event.latLng.lat(); 
        var lng = event.latLng.lng();
        var location ={lat:lat, lng:lng}

        console.log(typeof location);
        console.log("location " +location.lat+ "    " +location.lng );
      
        placeMarker(location);
        submitForm(location);
        
      });
    }

     function placeMarker(location) {
      if (marker) {
        marker.setPosition(location);
      } else {
        marker = new google.maps.Marker({
          position: location,
          map: map,
          draggable:true,
        });
      }

      $("#location-lat").val(location.lat);
      $("#location-lng").val(location.lng);
      console.log("placeMarker: " + $("#location-lat").val());

    }

    function submitForm(location){

       $('#submitBtn').click(function(event){
        var formData = {
            shopName: $('input[name=shopName]').val(),
            firstName: $('input[name=firstName]').val(),
            lastName: $('input[name=lastName]').val(),
            phoneNumber: $('input[name=phoneNumber]').val(),
            description: $('input[name=description]').val(),
            shopLocation: $('input[name=shopLocation]').val(),
            latitude : $("#location-lat").val(),
            longitude : $("#location-lng").val()
        }

        //  var latitude = $("#location-lat").val();
        //  var longitude = $("#location-lng").val();

        //  var location = {lat:latitude, lng:longitude}

         console.log("sent data : " +location.lat + " " +location.lng+ " end");

        $.ajax({
            url:"192.168.182.55:8888/test",
            type:"POST",
            dataType: "json",
            data: formData,
            
            success: function(data){
                console.log("Success " +data );
                
            }
        });

        event.preventDefault();
    });
    }


    
});