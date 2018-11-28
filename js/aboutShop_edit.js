$(function () {
  alert("edit connect");
  var map;
  var marker;

  initMap();
  getShopInfo();
  $("#imgInp").on("change", chng);

  $("#imgInp").change(function () {
    readURL(this);
  });

  // send selected image (POST ajax) ----------------------------------
  // $("#btnSubmit").click(function (event) {

  //   //stop submit the form, we will post it manually.
  //   event.preventDefault();
  //   sendSingleImg();

  // });
  function chng() {
    var typ = document.getElementById("imgInp").value;
    var res = typ.match(".jpg");
    var res2 = typ.match(".png");
    if (res || res2) {
      console.log("accept");
    }
    else {

      alert("Sorry only jpeg or PNG images are accepted");
      document.getElementById("imgInp").value = "";

    }
  };

  function readURL(input) {
    if (input.files && input.files[0]) {
      //FileReader is used to read the contents of Blob or File
      var reader = new FileReader();

      // The load event is fired when a resource and its dependent resources have finished loading.
      // Execute a JavaScript immediately after a page has been loaded:
      // <body onload="myFunction()">
      // The FileReader.onload property contains an event handler executed when the load event is fired, 

      reader.onload = function (e) {
        $('#img-upload').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  function sendSingleImg() {
    // Get form
    var form = $('#fileUploadForm')[0];

    // Create an FormData object 
    var data = new FormData(form);

    // // If you want to add an extra field for the FormData
    // data.append("CustomField", "This is some extra data, testing");

    // disabled the submit button
    $("#btnSubmit").prop("disabled", true);

    $.ajax({
      type: "POST",
      enctype: 'multipart/form-data',
      url: "http://192.168.1.7:8888/profile",
      data: data,
      processData: false,
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function (res) {

        $("#result").text(res);
        console.log("SUCCESS : ", res);
        $("#btnSubmit").prop("disabled", false);

      },
      error: function (e) {

        $("#result").text(e.responseText);
        console.log("ERROR : ", e);
        $("#btnSubmit").prop("disabled", false);

      }
    });
  }

  // ------------------ map ---------------------------------------

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
      var location = { lat: lat, lng: lng }

      console.log(typeof location);
      console.log("location " + location.lat + "    " + location.lng);

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
        draggable: true,
      });
    }

    $("#location-lat").val(location.lat);
    $("#location-lng").val(location.lng);
    console.log("placeMarker: " + $("#location-lat").val());

  }

  function submitForm(location) {

    $('#submitBtn').click(function (event) {
      var formData = {
        url: $('input[name=url]').val(),
        shopName: $('input[name=shopName]').val(),
        firstName: $('input[name=firstName]').val(),
        lastName: $('input[name=lastName]').val(),
        phoneNumber: $('input[name=phoneNumber]').val(),
        description: $('input[name=description]').val(),
        shopLocation: $('input[name=shopLocation]').val(),
        latitude: $("#location-lat").val(),
        longitude: $("#location-lng").val()
      }
      console.log(formData.url);
      //  var latitude = $("#location-lat").val();
      //  var longitude = $("#location-lng").val();
      //  var location = {lat:latitude, lng:longitude}
      // console.log("sent data : " +location.lat + " " +location.lng+ " end");
      $.ajax({
        url: "192.168.182.55:8888/test",
        type: "POST",
        dataType: "json",
        data: formData,

        success: function (data) {
          console.log("Success " + data);
          sendSingleImg();

        }
      });

      event.preventDefault();
    });
  }

  function getShopInfo() {
    $.ajax({
      url: "http://10.66.8.124:8888/test",
      type: "GET",
      dataType: "json",
      success: function (res) {
        $('input[name=shopName]').val(res.shopName),
          $('input[name=firstName]').val(res.firstName),
          $('input[name=lastName]').val(res.lastName),
          $('input[name=phoneNumber]').val(res.phoneNumber),
          $('input[name=description]').val(res.description),
          $('input[name=shopLocation]').val(res.location)
        // $("#location-lat").val(),
        //  $("#location-lng").val()

        if (res.url !== null) {

          $('#oldImg').attr('src', res.url);
        }
      }
    });
  }



});