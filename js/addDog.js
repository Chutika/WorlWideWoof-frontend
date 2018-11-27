$(function () {
   
    
    $('#submitBtn').click(function (event) { event.preventDefault(); submitForm(); });

    //name validate
    $('input[name=dogName]').on("change", function(){
        var pattern = /^([a-zA-Z]{0,9})$/
        if (!$(this).val().match(pattern)) {
           
            $('#name-valid-msg').removeClass('hidden');
            $('#name-valid-msg').show();
            $("#submitBtn").prop("disabled", true);
            
        }
        else {
            // else, do not display message
            $('#name-valid-msg').addClass('hidden');
            $("#submitBtn").prop("disabled", false);
            
        }
        
    });

    $('input[name=description]').on("change", function(){
        var pattern = /^([a-zA-Z]{0,140})$/
        if (!$(this).val().match(pattern)) {
           
            $('#description-valid-msg').removeClass('hidden');
            $('#description-valid-msg').show();
            $("#submitBtn").prop("disabled", true);
            
        }
        else {
            // else, do not display message
            $('#description-valid-msg').addClass('hidden');
            $("#submitBtn").prop("disabled", false);
            
        }
    });

    $('input[name=weight]').on("change", function(){
        var pattern = /^([0-9])/
        var value = $(this).val();
        if (!value.match(pattern) || (value<=0 || value>350) ) {
           
            $('#weight-valid-msg').removeClass('hidden');
            $('#weight-valid-msg').show();
            $("#submitBtn").prop("disabled", true);
            
        }
        else {
            // else, do not display message
            $('#weight-valid-msg').addClass('hidden');
            $("#submitBtn").prop("disabled", false);
            
        }
    });

    $('input[name=primaryColor]').on("change", function(){
        var pattern = /^([a-zA-Z]{0,50})$/
        if (!$(this).val().match(pattern)) {
           
            $('#primaryColor-valid-msg').removeClass('hidden');
            $('#primaryColor-valid-msg').show();
            $("#submitBtn").prop("disabled", true);
            
        }
        else {
            // else, do not display message
            $('#primaryColor-valid-msg').addClass('hidden');
            $("#submitBtn").prop("disabled", false);
            
        }
    });

    $('input[name=price]').on("change", function(){
        var pattern = /^([0-9])/
        var value =$(this).val();
        if (!value.match(pattern) || value<0 || value>1000000) {
           
            $('#price-valid-msg').removeClass('hidden');
            $('#price-valid-msg').show();
            $("#submitBtn").prop("disabled", true);
            
        }
        else {
            // else, do not display message
            $('#price-valid-msg').addClass('hidden');
            $("#submitBtn").prop("disabled", false);
            
        }
    });

    $('input#yearInput').on("change", function(){
        var pattern = /^([0-9])/
        var value =$(this).val();
        if (!value.match(pattern) || value<0 || value>30) {
           
            $('#year-valid-msg').removeClass('hidden');
            $('#year-valid-msg').show();
            $("#submitBtn").prop("disabled", true);
            
        }
        else {
            // else, do not display message
            $('#year-valid-msg').addClass('hidden');
            $("#submitBtn").prop("disabled", false);
            
        }
    });

    $('input#monthInput').on("change", function(){
        var pattern = /^([0-9])/
        var value =$(this).val();
        if (!value.match(pattern) || value<0 || value>30) {
           
            $('#month-valid-msg').removeClass('hidden');
            $('#month-valid-msg').show();
            $("#submitBtn").prop("disabled", true);
            
        }
        else {
            // else, do not display message
            $('#month-valid-msg').addClass('hidden');
            $("#submitBtn").prop("disabled", false);
            
        }
    });

   



});

function submitForm() {

    // $('#submitBtn').click(function (event) {
    var formData = {
        //dogPicture: $('#dogImg'),
        dogName: $('input[name=dogName]').val(),
        description: $('input[name=description]').val(),
        size: $('input[name=size]:checked').val(),
        weight: $('input[name=weight]').val(),
        breed: $('input[name=breed]').val(),
        momBreed: $('input[name=momBreed]').val(),
        dadBreed: $('input[name=dadBreed]').val(),
        primaryColor: $('input[name=primaryColor]').val(),
        price: $("input[name=price]").val(),
        service: $("input[name=service]:checked").val()
    }

    var str = "";


    for (var key in formData) {
        str += formData[key];
    }

    console.log(str);
    // expected output: "123"

    $.ajax({
        url: "http://10.66.8.124:8888/test",
        type: "POST",
        dataType: "json",
        data: formData,

        success: function (data) {
            console.log("Success " + data);

        }
    });

    //     event.preventDefault();
    // });
};

// function validateForm(){
//     dogName: $('input[name=dogName]').val(),
//     description: $('input[name=description]').val(),
//     size: $('input[name=size]:checked').val(),
//     weight: $('input[name=weight]').val(),
//     breed: $('input[name=breed]').val(),
//     momBreed: $('input[name=momBreed]').val(),
//     dadBreed: $('input[name=dadBreed]').val(),
//     primaryColor: $('input[name=primaryColor]').val(),
//     price: $("input[name=price]").val(),
//     service: $("input[name=service]:checked").val()
// }
