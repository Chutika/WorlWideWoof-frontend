var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

//reqquire multer
var multer = require('multer');

//set file name and destination
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'B:/oooeee/ThirdYear/Univerisity/softwareEngineer/simpleWebComponent/simpleUpload/img')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + " " +file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })


var app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.set("view engine", "ejs");

var dogs = [{   number: 1,
                url: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&h=350",
                shopName: "Woof woof",
                firstName: "John",
                lastName: "Digman",
                phoneNumber: "088-888888",
                description:"Woof woof is located in Chiang Mai. The owner is hansome and our dogs are all cute. What we're trying to say is, we're the best shop inChiang Mai. Come visit us and we guarantee you won't be dissappointed",
                certificate:"dog cer",
                lat:13.752450, 
                long: 100.497571
            },
            {   number: 2,
                url: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&h=350",
                shopName: "Meow Meow",
                firstName: "Lily",
                lastName: "Catgirl",
                phoneNumber: "099-888888",
                description:"Meow Meow is located in Bangkok. The owner is hansome and our dogs are all cute. What we're trying to say is, we're the best shop inChiang Mai. Come visit us and we guarantee you won't be dissappointed",
                certificate:"cat cer",
                lat:13.752450, 
                long: 100.497571
            },
            {   number: 3,
                url: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&h=350",
                shopName: "Oi Oi",
                firstName: "Pentest",
                lastName: "Pigeroo",
                phoneNumber: "011-888888",
                description:"Oi Oi is located in Australia. The owner is hansome and our dogs are all cute. What we're trying to say is, we're the best shop inChiang Mai. Come visit us and we guarantee you won't be dissappointed",
                certificate:"pig cer",
                lat:13.752450, 
                long: 100.497571
            }];


app.get("/", function(req, res){
    res.render("getAndPost");
});

app.get("/test",cors(), function(req, res){
    
    res.status(200).json([{   number: 1,
        url: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&h=350",
        shopName: "Woof woof",
        firstName: "John",
        lastName: "Digman",
        phoneNumber: "088-888888",
        description:"Woof woof is located in Chiang Mai. The owner is hansome and our dogs are all cute. What we're trying to say is, we're the best shop inChiang Mai. Come visit us and we guarantee you won't be dissappointed",
        certificate:"dog cer",
        lat:13.752450, 
        long: 100.497571
    },
    {   number: 2,
        url: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&h=350",
        shopName: "Meow Meow",
        firstName: "Lily",
        lastName: "Catgirl",
        phoneNumber: "099-888888",
        description:"Meow Meow is located in Bangkok. The owner is hansome and our dogs are all cute. What we're trying to say is, we're the best shop inChiang Mai. Come visit us and we guarantee you won't be dissappointed",
        certificate:"cat cer",
        lat:13.752450, 
        long: 100.497571
    },
    {   number: 3,
        url: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&h=350",
        shopName: "Oi Oi",
        firstName: "Pentest",
        lastName: "Pigeroo",
        phoneNumber: "011-888888",
        description:"Oi Oi is located in Australia. The owner is hansome and our dogs are all cute. What we're trying to say is, we're the best shop inChiang Mai. Come visit us and we guarantee you won't be dissappointed",
        certificate:"pig cer",
        lat:13.752450, 
        long: 100.497571
    }]);
});

app.post("/test",cors(), function(req, res){
    const data = req.body;
    Object.keys(data).forEach((key)=>{
        data[key] = "Backend recieved: " +data[key];
    });
    res.status(200).json(data);
});

app.get("/testSeveral", cors(), function(req, res){
    res.status(200).json({dogs : dogs});
});

//avatar => uploaded_image
app.post('/profile',cors(), upload.single('uploaded_image'), function (req, res, next) {
    var img = req.file;
    res.send("success img");
    console.log(img.filename)
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })
   
  
  app.post('/photos/upload',cors(), upload.array('photos', 5), function (req, res, next) {
    var imgs = req.file;
    console.log(imgs);
    res.send("success image upload");
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })
   
  var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])

  app.post('/cool-profile', cpUpload, function (req, res, next) {
    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
    //
    // e.g.
    //  req.files['avatar'][0] -> File
    //  req.files['gallery'] -> Array
    //
    // req.body will contain the text fields, if there were any
  })

  

app.listen(8888, "192.168.1.9", function(){
    console.log("get and post server is listening");
});