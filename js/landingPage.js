function goToShopInfo(){
    location.href="aboutShop.html"
}
$(function () {




    $.ajax({
        url: "https://us-central1-worldwidewoof-bcdfa.cloudfunctions.net/app/api/dog/",
        type: "GET",
        dataType: "json",
        // data: {number: "additional Data"},
        success: function (shop) {
            console.log("recieved " + shop.url);
            //FOR SALE
            var img1 = "<img class='card-img-top' id='photo1' src='"+shop[0].pictures[0]+"'alt='dog'>";
            var name1 ="<p class='card-text' id='breed.titleFontPicture1'>"+shop[0].name+"</p><p class='card-text' id='subFontPicture1'>"+shop[0].breed.title+"</p>";
            //n[0]=shop[0].name;
            //des[0]=shop[0].breed.title;
            //pic[0]= shop[0].pictures[0];
            //Pic2
            var img2 = "<img class='card-img-top' id='photo2' src='"+shop[1].pictures[0]+"'alt='dog'>";
            var name2 ="<p class='card-text' id='breed.titleFontPicture2'>"+shop[1].name+"</p><p class='card-text' id='subFontPicture2'>"+shop[1].breed.title+"</p>";
            //n[1]=shop[1].name;
            //des[1]=shop[1].breed.title;
            //pic[1]= shop[0].pictures[1];
            //Pic3
            var img3 = "<img class='card-img-top' id='photo3' src='"+shop[2].pictures[0]+"'alt='dog'>";
            var name3 ="<p class='card-text' id='breed.titleFontPicture3'>"+shop[2].name+"</p><p class='card-text' id='subFontPicture3'>"+shop[2].breed.title+"</p>";
            
            //FOR ADOPT
            //Pic1
            var img4 = "<img class='card-img-top' id='photo1' src='"+shop[0].pictures[0]+"'alt='dog'>";
            var name4 ="<p class='card-text' id='breed.titleFontPicture1'>"+shop[0].name+"</p><p class='card-text' id='subFontPicture1'>"+shop[0].breed.title+"</p>";
            
            //Pic2
            var img5 = "<img class='card-img-top' id='photo2' src='"+shop[1].pictures[0]+"'alt='dog'>";
            var name5 ="<p class='card-text' id='breed.titleFontPicture2'>"+shop[1].name+"</p><p class='card-text' id='subFontPicture2'>"+shop[1].breed.title+"</p>";
           
            //Pic3
            var img6 = "<img class='card-img-top' id='photo3' src='"+shop[2].pictures[0]+"'alt='dog'>";
            var name6 ="<p class='card-text' id='breed.titleFontPicture3'>"+shop[2].name+"</p><p class='card-text' id='subFontPicture3'>"+shop[2].breed.title+"</p>";
            
           
            
            $("#body1").before(img1);
            $("#name1").append(name1);
            $("#body2").before(img2);
            $("#name2").append(name2);
            $("#body3").before(img3);
            $("#name3").append(name3);
            $("#body4").before(img4);
            $("#name4").append(name4);
            $("#body5").before(img5);
            $("#name5").append(name5);
            $("#body6").before(img6);
            $("#name6").append(name6);
            
           
        }
    });



    



});
