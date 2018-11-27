function goToShopInfo(){
    location.href="aboutShop.html"
}
var pic=["","","","","","","","","","","","","","","","","","",""];
var n= ["","","","","","","","","","","","","","","","","","",""];
var des=["","","","","","","","","","","","","","","","","","",""];




$(function () {
    $.ajax({
        url: "https://us-central1-worldwidewoof-bcdfa.cloudfunctions.net/app/api/dog/",
        type: "GET",
        dataType: "json",
        
        // data: {number: "additional Data"},
        success: function (shop) {
            var breed="<option value='0' selected disabled>Location</option><option value='1'>"+shop[2].breed.title+"</option>";
           
            
            //Pic1
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
            
            //Pic4
            var img4 = "<img class='card-img-top' id='photo4' src='"+shop[3].pictures[0]+"'alt='dog'>";
            var name4 ="<p class='card-text' id='breed.titleFontPicture4'>"+shop[3].name+"</p><p class='card-text' id='subFontPicture4'>"+shop[3].breed.title+"</p>";
            
            //Pic5
            var img5 = "<img class='card-img-top' id='photo5'src='"+shop[4].pictures[0]+"'alt='dog'>";
            var name5 ="<p class='card-text' id='breed.titleFontPicture5'>"+shop[4].name+"</p><p class='card-text' id='subFontPicture5'>"+shop[1].breed.title+"</p>";
           
            //Pic6
            var img6 = "<img class='card-img-top' id='photo6' src='"+shop[0].pictures[1]+"'alt='dog'>";
            var name6 ="<p class='card-text' id='breed.titleFontPicture6'>"+shop[5].name+"</p><p class='card-text' id='subFontPicture6'>"+shop[2].breed.title+"</p>";
           
            //Pic7
            var img7 = "<img class='card-img-top' id='photo7' src='"+shop[0].pictures[0]+"'alt='dog'>";
            var name7 ="<p class='card-text' id='breed.titleFontPicture7'>"+shop[6].name+"</p><p class='card-text' id='subFontPicture7'>"+shop[0].breed.title+"</p>";
            
            //Pic8
            var img8 = "<img class='card-img-top' id='photo8' src='"+shop[0].pictures[1]+"'alt='dog'>";
            var name8 ="<p class='card-text' id='breed.titleFontPicture8'>"+shop[7].name+"</p><p class='card-text' id='subFontPicture8'>"+shop[1].breed.title+"</p>";
            
            //Pic9
            var img9 = "<img class='card-img-top' id='photo9' src='"+shop[0].pictures[0]+"'alt='dog'>";
            var name9 ="<p class='card-text' id='breed.titleFontPicture9'>"+shop[8].name+"</p><p class='card-text' id='subFontPicture9'>"+shop[2].breed.title+"</p>";
            
            for (i==0;i<=6;i++)
            {
                pic[i]= shop[i].pictures[0];
                n[i]=shop[i].name;
                //des[i]=shop[i].breed.title;
            }
           

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
            $("#body7").before(img7);
            $("#name7").append(name7);
            $("#body8").before(img8);
            $("#name8").append(name8);
            $("#body9").before(img9);
            $("#name9").append(name9); 
            $("#Breed").append(breed);
           
            
        }
        
        
         
    });
    


    



});
function next() {
  
    document.getElementById('photo1').src = pic[1];
    document.getElementById('breed.titleFontPicture1').innerHTML = n[4];
    document.getElementById('subFontPicture1').innerHTML = des[1];
    
  
}
function pre() {
    document.getElementById('photo1').src = pic[0];
    document.getElementById('breed.titleFontPicture1').innerHTML = n[0];
    document.getElementById('subFontPicture1').innerHTML = des[0];
  
}
function search(){

}
    