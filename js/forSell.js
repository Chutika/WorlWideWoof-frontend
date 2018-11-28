function goToShopInfo(){
    location.href="aboutShop.html"
}
var pic=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var n= ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var des=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];




// $(function () {
//     $.ajax({
//         url: "https://us-central1-worldwidewoof-bcdfa.cloudfunctions.net/app/api/dog/",
//         type: "GET",
//         dataType: "json",
        
//         // data: {number: "additional Data"},
//         success: function (shop) {
            
           
            
//             // //Pic1
//             // var img1 = "<img class='card-img-top' id='photo1' src='"+ <%= shop[0].pictures[0] %>+"'alt='dog'>";
//             // var name1 ="<p class='card-text' id='breed.titleFontPicture1'>"+shop[0].name+"</p><p class='card-text' id='subFontPicture1'>"+shop[0].breed.title+"</p>";
//             // var price1="<img src='../asset/icon/black-shop-tag.svg' alt='darkTag' id='darkTag'>"+shop[9].sellPrice;
//             // //n[0]=shop[0].name;
//             // //des[0]=shop[0].breed.title;
//             // //pic[0]= shop[0].pictures[0];
//             // //Pic2
//             // var img2 = "<img class='card-img-top' id='photo2' src='"+shop[1].pictures[0]+"'alt='dog'>";
//             // var name2 ="<p class='card-text' id='breed.titleFontPicture2'>"+shop[1].name+"</p><p class='card-text' id='subFontPicture2'>"+shop[1].breed.title+"</p>";
//             // //n[1]=shop[1].name;
//             // //des[1]=shop[1].breed.title;
//             // //pic[1]= shop[0].pictures[1];
//             // //Pic3
//             // var img3 = "<img class='card-img-top' id='photo3' src='"+shop[2].pictures[0]+"'alt='dog'>";
//             // var name3 ="<p class='card-text' id='breed.titleFontPicture3'>"+shop[2].name+"</p><p class='card-text' id='subFontPicture3'>"+shop[2].breed.title+"</p>";
            
//             // //Pic4
//             // var img4 = "<img class='card-img-top' id='photo4' src='"+shop[3].pictures[0]+"'alt='dog'>";
//             // var name4 ="<p class='card-text' id='breed.titleFontPicture4'>"+shop[3].name+"</p><p class='card-text' id='subFontPicture4'>"+shop[3].breed.title+"</p>";
            
//             // //Pic5
//             // var img5 = "<img class='card-img-top' id='photo5'src='"+shop[4].pictures[0]+"'alt='dog'>";
//             // var name5 ="<p class='card-text' id='breed.titleFontPicture5'>"+shop[4].name+"</p><p class='card-text' id='subFontPicture5'>"+shop[1].breed.title+"</p>";
           
//             // //Pic6
//             // var img6 = "<img class='card-img-top' id='photo6' src='"+shop[5].pictures[0]+"'alt='dog'>";
//             // var name6 ="<p class='card-text' id='breed.titleFontPicture6'>"+shop[5].name+"</p><p class='card-text' id='subFontPicture6'>"+shop[2].breed.title+"</p>";
           
//             // //Pic7
//             // var img7 = "<img class='card-img-top' id='photo7' src='"+shop[6].pictures[0]+"'alt='dog'>";
//             // var name7 ="<p class='card-text' id='breed.titleFontPicture7'>"+shop[6].name+"</p><p class='card-text' id='subFontPicture7'>"+shop[0].breed.title+"</p>";
            
//             // //Pic8
//             // var img8 = "<img class='card-img-top' id='photo8' src='"+shop[7].pictures[0]+"'alt='dog'>";
//             // var name8 ="<p class='card-text' id='breed.titleFontPicture8'>"+shop[7].name+"</p><p class='card-text' id='subFontPicture8'>"+shop[1].breed.title+"</p>";
            
//             // //Pic9
//             // var img9 = "<img class='card-img-top' id='photo9' src='"+shop[8].pictures[0]+"'alt='dog'>";
//             // var name9 ="<p class='card-text' id='breed.titleFontPicture9'>"+shop[8].name+"</p><p class='card-text' id='subFontPicture9'>"+shop[2].breed.title+"</p>";
//             console.log(shop.length);
//             for (var i=0;i<shop.length;i++)
//             {   
//                 pic[i]= shop[i].pictures[0]; 
//                 n[i]=shop[i].name;
//                 pic[i].
//                 console.log(i);
//                 //des[i]=shop[i].breed.title;
//             }
           

//             $("#body1").before(img1);
//             $("#name1").append(name1);
//             $("#price1").append(price1);
//             $("#body2").before(img2);
//             $("#name2").append(name2);
//             $("#body3").before(img3);
//             $("#name3").append(name3);
//             $("#body4").before(img4);
//             $("#name4").append(name4);
//             $("#body5").before(img5);
//             $("#name5").append(name5);
//             $("#body6").before(img6);
//             $("#name6").append(name6);
//             $("#body7").before(img7);
//             $("#name7").append(name7);
//             $("#body8").before(img8);
//             $("#name8").append(name8);
//             $("#body9").before(img9);
//             $("#name9").append(name9); 
            
           
            
//         }
        
        
         
//     });
   


    



// });
// function next() {
//     var url ="";
//     var currURL = location.hef;
//     window.location.href = url + "/forSale.html?page=" +currPage+1;
    // document.getElementById('photo1').src = pic[9];
    // document.getElementById('breed.titleFontPicture1').innerHTML = n[9];
    // document.getElementById('subFontPicture1').innerHTML = des[9];
    // document.getElementById('photo2').src = pic[10];
    // document.getElementById('breed.titleFontPicture2').innerHTML = n[10];
    // document.getElementById('subFontPicture2').innerHTML = des[10];
    // document.getElementById('photo3').src = pic[11];
    // document.getElementById('breed.titleFontPicture3').innerHTML = n[11];
    // document.getElementById('subFontPicture3').innerHTML = des[11];
    // document.getElementById('photo4').src = pic[12];
    // document.getElementById('breed.titleFontPicture4').innerHTML = n[12];
    // document.getElementById('subFontPicture4').innerHTML = des[12];
    // document.getElementById('photo5').src = pic[13];
    // document.getElementById('breed.titleFontPicture5').innerHTML = n[13];
    // document.getElementById('subFontPicture5').innerHTML = des[13];
    // document.getElementById('photo6').src = pic[14];
    // document.getElementById('breed.titleFontPicture6').innerHTML = n[14];
    // document.getElementById('subFontPicture6').innerHTML = des[14];
    // document.getElementById('photo7').src = pic[15];
    // document.getElementById('breed.titleFontPicture7').innerHTML = n[15];
    // document.getElementById('subFontPicture7').innerHTML = des[15];
    // document.getElementById('photo8').src = pic[16];
    // document.getElementById('breed.titleFontPicture8').innerHTML = n[16];
    // document.getElementById('subFontPicture8').innerHTML = des[16];
    // document.getElementById('photo9').src = pic[17];
    // document.getElementById('breed.titleFontPicture9').innerHTML = n[17];
    // document.getElementById('subFontPicture9').innerHTML = des[17];
    
  
// }
// function pre() {
//     document.getElementById('photo1').src = pic[0];
//     document.getElementById('breed.titleFontPicture1').innerHTML = n[0];
//     document.getElementById('subFontPicture1').innerHTML = des[0];
//     document.getElementById('photo2').src = pic[1];
//     document.getElementById('breed.titleFontPicture2').innerHTML = n[1];
//     document.getElementById('subFontPicture2').innerHTML = des[1];
//     document.getElementById('photo3').src = pic[2];
//     document.getElementById('breed.titleFontPicture3').innerHTML = n[2];
//     document.getElementById('subFontPicture3').innerHTML = des[2];
//     document.getElementById('photo4').src = pic[3];
//     document.getElementById('breed.titleFontPicture4').innerHTML = n[3];
//     document.getElementById('subFontPicture4').innerHTML = des[3];
//     document.getElementById('photo5').src = pic[4];
//     document.getElementById('breed.titleFontPicture5').innerHTML = n[4];
//     document.getElementById('subFontPicture5').innerHTML = des[4];
//     document.getElementById('photo6').src = pic[5];
//     document.getElementById('breed.titleFontPicture6').innerHTML = n[5];
//     document.getElementById('subFontPicture6').innerHTML = des[5];
//     document.getElementById('photo7').src = pic[6];
//     document.getElementById('breed.titleFontPicture7').innerHTML = n[6];
//     document.getElementById('subFontPicture7').innerHTML = des[6];
//     document.getElementById('photo8').src = pic[7];
//     document.getElementById('breed.titleFontPicture8').innerHTML = n[7];
//     document.getElementById('subFontPicture8').innerHTML = des[7];
//     document.getElementById('photo9').src = pic[8];
//     document.getElementById('breed.titleFontPicture9').innerHTML = n[8];
//     document.getElementById('subFontPicture9').innerHTML = des[8];
  
// }
function search(){
    var b = document.getElementById("Breed");
    var breed = b.value;
    var gender = $('#Gender:checked').val();
    // var g = document.getElementById("Gender");
    // var gender = g.value;
    var size = $('#Size:checked').val();
    // var s = document.getElementById("Size");
    // var size = s.value;
    var formData = {
        selected1: breed,
        selected2: gender,
        selected3: size,
    }
    $.ajax({
        url: "https://us-central1-worldwidewoof-bcdfa.cloudfunctions.net/app/api/dog",
        type: "GET",
        dataType: "json",
        data:formData, 
        success: function (breed){
            alert("yaha")
        }
        

    });
}
    