const url_1 = config.host + "/api/dog/dogShop";
$(() => {
  function showDogs(dogs) {
    for (i = 0; i < dogs.length; i++) {
      // id=dogs[i]._id;

      // s = "<div class='card cardDog'><div class='row'><div class='col-3' onclick='redirectToInfo(dogs[i]._id)'> <img src=" + dogs[i].pictures[0] + "alt='Card image cap' id='picture'></div><div class='card-body col-9'><div class='row' id='titleCard'> <div class='col-6' onclick='redirectToInfo(dogs[i]._id)'> <h3>" +dogs[i].name + "</h3></div><div class='col-6'><p id='deleteButton' onclick='deleteDog()'>ลบ<img id='deleteIcon' src='../asset/Icon/delete.svg'alt='delete'></p><p id='editButton' onclick='"+config.host + "/api/dog/" + dogs[i]._id + "/update'>แก้ไข <img id='editIcon'src='../asset/Icon/delete.svg' alt='edit'></p></div></div><div onclick='redirectToInfo(dogs[i]._id)'> <br><p class='infoDog'>"+ dogs[i].breed +"อายุ " + dogs[i].year + " ปี " + dogs[i].month + " เดือน </p><p class='infoDog'>" + dogs[i].sellPrice + "</p></div></div></div> </div>";
      s = "<div class='card cardDog'><div class='row'><div class='col-3' onclick='gotoInfoDog(\"" + String(dogs[i]._id) + "\")'> <img src=" + dogs[i].pictures[0] + "alt='Card image cap' id='picture'></div><div class='card-body col-9'><div class='row' id='titleCard'> <div class='col-6' onclick='gotoInfoDog(\"" + String(dogs[i]._id) + "\")'> <h3>" + dogs[i].name + "</h3></div><div class='col-6'><p id='deleteButton' onclick='deleteDog(\"" + String(dogs[i]._id) + "\")'>ลบ<img id='deleteIcon' src='../asset/Icon/delete.svg'alt='delete'></p><p id='editButton' onclick='gotoEditDog(\"" + String(dogs[i]._id) + "\")'>แก้ไข <img id='editIcon'src='../asset/Icon/edit.svg' alt='edit'></p></div></div><div onclick='gotoInfoDog(\"" + String(dogs[i]._id) + "\")'> <br><p class='infoDog'>" + dogs[i].breed + "อายุ " + dogs[i].year + " ปี " + dogs[i].month + " เดือน </p><p class='infoDog'>" + dogs[i].sellPrice + "</p></div></div></div> </div>";
      // s = "<div class='card cardDog'><div class='row'><div class='col-3' onclick='redirectToInfo(dogs[i]._id)'> <img src=" + dogs[i].pictures[0] + "alt='Card image cap' id='picture'></div><div class='card-body col-9'><div class='row' id='titleCard'> <div class='col-6' onclick='redirectToInfo(dogs[i]._id)'> <h3>" +dogs[i].name + "</h3></div><div class='col-6'><p id='deleteButton' onclick='deleteDog()'>ลบ<img id='deleteIcon' src='../asset/Icon/delete.svg'alt='delete'></p><p id='editButton' onclick='redirectToEdit(dogs[i]._id)'>แก้ไข <img id='editIcon'src='../asset/Icon/delete.svg' alt='edit'></p></div></div><div onclick='redirectToInfo(dogs[i]._id)'> <br><p class='infoDog'>"+ dogs[i].breed +"อายุ " + dogs[i].year + " ปี " + dogs[i].month + " เดือน </p><p class='infoDog'>" + dogs[i].sellPrice + "</p></div></div></div> </div>";
      $("#info").append(s);
    }

    // s = "<div class='card cardDog'><div class='row'><div class='col-3' onclick='location.href=config.host+'/api/dog'"+dogs[i]._id+"'><img src=" + dogs[i].pictures[0] + "alt='Card image cap' id='picture'></div><div class='card-body col-9'><div class='row' id='titleCard'><div class='col' onclick='location.href=config.host+'/api/dog'"+dogs[i]._id+"'><h3>" + dogs[i].name + "</h3></div><div class='col-6'><p id='deleteButton' onclick='deleteDog()'>ลบ<img id='deleteIcon' src='../asset/Icon/delete.svg' alt='delete'></p><p id='editButton' onclick='location.href=config.host+'/delete/api/dog'"+dogs[i]._id+"'>แก้ไข<img id='editIcon' src='../asset/Icon/delete.svg' alt='edit'></p></div></div><div onclick='location.href=config.host+'/api/dog'"+dogs[i]._id+"'><br><p class='infoDog'>" + dogs[i].breed + "</p><p class='age'>อายุ " + dogs[i].year + " ปี " + dogs[i].month + " เดือน </p><p class='age'>" + dogs[i].sellPrice + "</p></div><div class='col-lg-6'></div></div></div></div></div>";    
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


function gotoInfoDog(dogid) {
  console.log(dogid);
  location.href = config.host + '/api/dog/' + dogid;
  // location.href = "/dogList.html?page=1";
}

function gotoEditDog(dogid) {
  console.log(dogid);
  location.href = config.host + '/api/dog/' + dogid + '/update';
  // location.href = "/dogList.html?page=1";
}

function deleteDog(dogid) {
  $.ajax({
    url: config.host + "/api/dog/"+dogid,
    type: "DELETE",
    success: function (res) {
      console.log("success");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Something went wrong " + errorThrown + " " + textStatus);
    }
  });
}