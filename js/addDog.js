$(function () {
 
    submitForm();

    function submitForm() {

        $('#submitBtn').click(function (event) {
            var formData = {
                dogPicture: $('#dogImg'),
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

            event.preventDefault();
        });
    }



});