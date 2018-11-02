$(function(){

   
    $('#submitBtn').click(function(event){
        
        var formData = {
            shopName: $('input[name=shopName]').val(),
            firstName: $('input[name=firstName]').val(),
            lastName: $('input[name=lastName]').val(),
            phoneNumber: $('input[name=phoneNumber]').val(),
            description: $('input[name=description]').val(),
            shopLocation: $('input[name=shopLocation]').val()
        }

        $.ajax({
            url:"http://35.193.129.5:8080/test",
            type:"POST",
            dataType: "json",
            data: formData,
            success: function(data){
                console.log($('input[name=shopName]').val());
                console.log(data);
                console.log("Submit form success " +data.shopName+ " " +data.firstName+ " " +data.lastName+ " " +data.phoneNumber+ " " +data.description+ " " +data.shopLocation);
            }
        });

        event.preventDefault();
    });
    
});