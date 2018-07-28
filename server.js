const express = require("express");
const bodyparser = require("body-parser");
var app = express();


//building a server here

var PORT= process.env.PORT || 3000;

//routes
//=============================
app.get("/home.html", function(req, res){
    //do something

});
app.get("/servey.html", function(req, res){
    //do something

});


//listener
//=============================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
