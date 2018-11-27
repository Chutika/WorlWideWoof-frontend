$(function () {


    $('#submitBtn').click(function (event) { event.preventDefault(); submitForm(); });

    //validate form info-----------------------------------------------------------------------------------

    //name validate
    $('input[name=dogName]').on("change", function () {
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

    $('input[name=description]').on("change", function () {
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

    $('input[name=weight]').on("change", function () {
        var pattern = /^([0-9])/
        var value = $(this).val();
        if (!value.match(pattern) || (value <= 0 || value > 350)) {

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

    $('input[name=primaryColor]').on("change", function () {
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

    $('input[name=price]').on("change", function () {
        var pattern = /^([0-9])/
        var value = $(this).val();
        if (!value.match(pattern) || value < 0 || value > 1000000) {

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

    $('input#yearInput').on("change", function () {
        var pattern = /^([0-9])/
        var value = $(this).val();
        if (!value.match(pattern) || value < 0 || value > 30) {

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

    $('input#monthInput').on("change", function () {
        var pattern = /^([0-9])/
        var value = $(this).val();
        if (!value.match(pattern) || value < 0 || value > 30) {

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

    //-----------------------------------------------------------------------------------------------------------

    $("#images").change(preview_image);
    $("#reset-img").click(function () {
        document.getElementById("uploadForm").reset();
    });

    // --------------------------function---------------------------------
    var imgCount = 0;

    function validateFiles(files) {

        return validateFilesNum(files) && validateFilesType(files)

    }

    function validateFilesNum(files) {
        var total_files = files.length;

        var imgLimit = 5;

        imgCount += total_files;

        console.log("Currently " + imgCount + " images");

        if (imgCount > imgLimit) {
            alert("You can only upload a maximum of 5 files (imgLimit) " + imgLimit);
            event.preventDefault();
            event.stopPropagation();
            imgCount -= total_files;
            console.log("imgCount - total_files : Currently " + imgCount);
            // document.getElementById("uploadForm").reset();
            return false
        }
        return true
    }

    function validateFilesType(files) {
        var total_files = files.length;

        for (var i = 0; i < total_files; i++) {

            console.log("Files type " + i + " " + files[i].type);
            console.log("Files size " + i + " " + files[i].size);

            if (files[i].type.match('image/jpeg') || files[i].type.match('image/png')) {
                console.log("Right extension");
            } else {
                imgCount -= total_files;
                console.log("wrong extension " + imgCount);

                // ------------- reset -------------
                document.getElementById("uploadForm").reset();
                imgCount = 0;
                console.log("reset all img, please selected again");
                $("div#images_preview img").remove();
                $('#uploadStatus').html('Please select only images(jpg and png)');
                return false
            }
        }

        return true;

    }


    function preview_image() {

        var files = document.getElementById("images").files;
        var isValid = validateFiles(files);
        console.log("validate files " + isValid);

        if (isValid) {
            var total_file = files.length;

            for (var i = 0; i < total_file; i++) {
                $('#images_preview').append("<img width='200px' src='" + URL.createObjectURL(event.target.files[i]) + "'>");
                console.log("Files type " + i + " " + files[i].type);
                console.log("Files size " + i + " " + files[i].size);
            }
        }

    }
    function submitForm() {

        console.log("type of weight value " + typeof (Number($('input[name=weight]').val())));

        // $('#submitBtn').click(function (event) {
        var formData = {
            //dogPicture: $('#dogImg'),
            shopId: "5bfae1f0d60e84c41ccde875",
            name: $('input[name=dogName]').val(),
            description: $('input[name=description]').val(),
            size: $('input[name=size]:checked').val(),
            weight: Number($('input[name=weight]').val()),
            // year: $('input#yearInput').val(),
            // month: $('input#monthInput').val(),
            breed: $('input[name=breed]').val(),
            momBreed: $('input[name=momBreed]').val(),
            dadBreed: $('input[name=dadBreed]').val(),
            primaryColor: $('input[name=primaryColor]').val(),
            sellPrice: $("input[name=price]").val(),
            service: $("input[name=service]:checked").val()
        }

        var str = "";
        for (var key in formData) {
            str += formData[key];
        }
        console.log(str);


        $.ajax({
            url: "https://us-central1-worldwidewoof-bcdfa.cloudfunctions.net/app/api/dog/new",
            type: "POST",
            dataType: "json",
            data: formData,

            success: function (res) {
                console.log("Data Form Sent Success " + res + " " + res.id);
                $("input#dogId").val(res.id);
               
                imgAPI = "https://us-central1-worldwidewoof-bcdfa.cloudfunctions.net/app/api/dog/"+res.id+"/uploadImage"
        
                $('#uploadForm').attr('action', imgAPI);
                console.log("action " +$('#uploadForm').attr('action'));
                sendFiles();

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Something went wrong " + errorThrown + " " + textStatus);
            }
        });

        //     event.preventDefault();
        // });
    };

    function sendFiles(num) {
       
        $('#uploadForm').ajaxSubmit({
            target: '#uploadStatus',
          
            success: function (res) {
                console.log("Files Form Sent Success " + res);
                // ------------- reset -------------
                imgCount = 0;
                document.getElementById("uploadForm").reset();
                document.getElementById("dataForm").reset();
                $("div#images_preview img").remove();
                $('#uploadStatus').html('Uploaded successfully');

                // window.location.assign("dogList.html")

            },
            error: function () {
                $('#uploadStatus').html('Fail to upload images, please try again.');
            }
        });

    }



});




