const url_1 = config.host + "/api/dog/dogShop";
$(() => {

  function showDogs(dogs){
    for(i=0;i<dogs.length;i++){
      s="<div class='card cardDog'><div class='row'><div class='col-3' onclick='goToDogInfo_forShop()'><img src="+dogs[i].pictures[0]+"alt='Card image cap' id='picture'></div><div class='card-body col-9'><div class='row' id='titleCard'><div class='col' onclick='goToDogInfo_forShop()'><h3>"+dogs[i].name+"</h3></div><div class='col'><p id='deleteButton' onclick='deleteDog()'>ลบ<img id='deleteIcon' src='../asset/Icon/delete.svg' alt='delete'></p></div></div><div class='row' onclick='goToDogInfo_forShop()'><div class='col-lg-6'><br><p class='infoDog'>"+dogs[i].breed+"</p><p class='age'>อายุ "+ dogs[i].year+" ปี "+ dogs[i].month +" เดือน </p><p class='age'>"+dogs[i].sellPrice+"</p></div><div class='col-lg-6'><h2 class='status'>สถานะ</h2><p class='status'>สัส</p></div></div></div></div></div>";
      $("#info").append(s);
    }

  }

  $.ajax({
    url: url_1,
    type: "GET",
    dataType: "json",
    // data: {number: "additional Data"},
    success: function (dogs) {
      console.log("recieved " + JSON.stringify(dogs));
      showDogs(dogs);
    }
  });

  // $("#addBtn").click((event) => {
  //   $("#info").append("<div class='card cardDog'><div class='row'><div class='col-3' onclick='goToDogInfo_forShop()'><img src='https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d' alt='Card image cap' id='picture'></div><div class='card-body col-9'><div class='row' id='titleCard'><div class='col' onclick='goToDogInfo_forShop()'><h3>A</h3></div><div class='col'><p id='deleteButton' onclick='deleteDog()'>ลบ<img id='deleteIcon' src='../asset/Icon/delete.svg' alt='delete'></p></div></div><div class='row' onclick='goToDogInfo_forShop()'><div class='col-lg-6'><br><p class='infoDog'>ไซบีเรีย อายุ 2 ปี 1 เดือน</p><p class='infoDog'>10000</p></div><div class='col-lg-6'><h2 class='status'>สถานะ</h2><p class='status'>สัส</p></div></div></div></div></div>");
  // });

  $("#searchBtn").click((event) => {
    var url = "";
    var data = {
      breed: $("#breed").val(),
      sellPrice: $("input#sellPrice").val(),
      size: $('input[name=size]:checked').val(),
      gender: $('input[name=gender]:checked').val()
    }
    window.location.href = url + "/dogList.html?breed=" + data.breed + "&sellPrice=" + data.sellPrice + "&size=" + data.size + "&gender=" + data.gender;
  });

  $("#prevBtn").click(function (event) {
    var currPage = page;
    var url = "";

    if (currPage !== 1) {
      window.location.href = url + "/dogList.html?page=" + currPage - 1;
    } else {
      $(this).addClass("hidden");
      $(this).prop("disabled", true);
    }

  });



  $("button#nextBtn").click(function (event) {
    var currPage = page;
    var url = "";

    if (currPage !== pageLength) {
      window.location.href = url + "/dogList.html?page=" + currPage + 1;
    } else {
      $(this).addClass("hidden");
      $(this).prop("disabled", true);
    }

  });
});

function goToDogInfo_forShop() {
  location.href = "dogInfo_forShop.html";
}

function deleteDog() {
  location.href = "/dogList.html?page=1";
}