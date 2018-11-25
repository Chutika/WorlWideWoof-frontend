function goToShopInfo(){
    location.href="aboutShop.html"
}
$(function () {




    $.ajax({
        url: "http://192.168.1.9:8888/test",
        type: "GET",
        dataType: "json",
        // data: {number: "additional Data"},
        success: function (shop) {
            console.log("recieved " + shop.url);
            //FOR SALE
            //Pic1
            var img1 = "<a href='../html/dogInfo.html'><img class='card-img-top' src='"+shop[0].url+"'alt='dog'></a>";
            var name1 ="<p class='card-text' id='titleFontPicture1'>"+shop[0].shopName+"<span id='subFontPicture'><br>"+shop[0].firstName+"</span></p>";
            //Pic2
            var img2 = "<a href='../html/dogInfo.html'><img class='card-img-top' src='"+shop[1].url+"'alt='dog'></a>";
            var name2 ="<p class='card-text' id='titleFontPicture1'>"+shop[0].shopName+"<span id='subFontPicture'><br>"+shop[1].firstName+"</span></p>";
            //Pic3
            var img3 = "<a href='../html/dogInfo.html'><img class='card-img-top' src='"+shop[2].url+"'alt='dog'></a>";
            var name3 ="<p class='card-text' id='titleFontPicture1'>"+shop[2].shopName+"<span id='subFontPicture'><br>"+shop[2].firstName+"</span></p>";
            //FOR ADOPT
            //Pic1
            var img4 = "<a href='../html/dogInfo.html'><img class='card-img-top' src='"+shop[0].url+"'alt='dog'></a>";
            var name4 ="<p class='card-text' id='titleFontPicture1'>"+shop[0].shopName+"<span id='subFontPicture'><br>"+shop[0].firstName+"</span></p>";
            //Pic2
            var img5 = "<a href='../html/dogInfo.html'><img class='card-img-top' src='"+shop[1].url+"'alt='dog'></a>";
            var name5 ="<p class='card-text' id='titleFontPicture1'>"+shop[2].shopName+"<span id='subFontPicture'><br>"+shop[1].firstName+"</span></p>";
            //Pic3
            var img6 = "<a href='../html/dogInfo.html'><img class='card-img-top' src='"+shop[1].url+"'alt='dog'></a>";
            var name6 ="<p class='card-text' id='titleFontPicture1'>"+shop[0].shopName+"<span id='subFontPicture'><br>"+shop[1].firstName+"</span></p>";
           
            
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
