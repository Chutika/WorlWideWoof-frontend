$(function () {
    alert("edit dog js connected");
    getInfo();
    validateName();
    submitForm();
   

    function submitForm() {

        $('#submitBtn').click(function (event) {
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
                url: "http://10.66.11.35:8888/test",
                type: "POST",
                dataType: "json",
                data: formData,

                success: function (data) {
                    console.log("Success " + data);

                }
            });

            event.preventDefault();
        });
    };

    function validateName() {
        var $regexname = /^([a-zA-Z]{0,9})$/;
        $('#name').on('keypress keydown keyup', function () {
            if (!$(this).val().match($regexname)) {
                // there is a mismatch, hence show the error message
                $('#name + .valid-msg').removeClass('hidden');
                $('#name + .valid-msg').show();
            }
            else {
                // else, do not display message
                $('#name + .valid-msg').addClass('hidden');
            }
        });
    };

    function getInfo(){
        $.ajax({
            url: "http://10.66.11.35:8888/dogtest",
            type: "GET",
            dataType: "json",
            // data: {number: "additional Data"},
            success: function (dog) {
                               
                alert("recieved : " +dog.breed);
    
                $('input[name=dogName]').val(dog.name);
                $('input[name=description]').val(dog.description);
                $('input[name=size]:checked').val(dog.size);
                $('input[name=weight]').val(dog.weight);
                $('input[name=breed]').val(dog.breed);
                $('input[name=momBreed]').val(dog.momBreed);
                $('input[name=dadBreed]').val(dog.dadBreed);
                $('input[name=primaryColor]').val(dog.primaryColor);
                $("input[name=price]").val(dog.sellPrice);

                if(dog.gender === 0){
                    $("#m-gender").prop("checked", true);
                }else{
                    $("#f-gender").prop("checked", true);
                }

                if(dog.service === 0){
                    $("#sale-service").prop("checked", true);
                }else if(dog.service === 1){
                    $("#rent-service").prop("checked", true);
                }else{
                    $("#both-service").prop("checked", true);
                }
        
               
            }
        });
    };



});