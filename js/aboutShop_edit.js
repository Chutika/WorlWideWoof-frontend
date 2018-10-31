console.log("connect");

//initialize 
const Http = new XMLHttpRequest();
//specify url endpoint and http method 
const url = "http://35.193.129.5:8080/test"
//tie the http method and URL
Http.open("POST", url);
//fire off request
Http.send();

//log the http response to the console
Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
}

//readyStae == 4 means the  request is done
//readyState
// 0 UNSENT
// 1 OPENED
// 2 HEADERS_RECIEVED
// 3 LOADING
// 4 DONE
Http.onreadystatechange=function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(Http.responseText);
    }
}