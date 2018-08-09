const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var app = express();
var friends = require("./app/data/friends.js");


//building a server here

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
//=============================
app.get("/", function (req, res) {
    //do something
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});


app.get("/survey.html", function (req, res) {
    //do something
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});


app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function(req, res){
    var input = req.body;
    console.log(input);
    friends.push2friends(input);
    console.log(friends.friends);
    
});


//listener
//=============================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
