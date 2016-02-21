var r = require("rethinkdbdash")();

require("rethink-config")({
  "r": r,
  "database": "superheroes",
  "tables": ["heroes"]
});

var express = require("express");
var server = express();

server.use(express.static("./public"));

var bodyParser = require("body-parser");
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.post("/hero", function(req, res){

  var hero = req.body.hero;
  var powers = req.body.hero;
  
  r.db("superheroes").table("heroes").insert({
    "hero": hero
  }).then(function(){
    return res.send("Super hero added!")
  })
})

server.get("/hero", function(req, res){
  r.db("superheroes").table("heroes").then(function(result){
    return res.send(result);
  });
});
var PORT = process.env.PORT || 3000
server.listen(3000);
console.log("App is running on PORT" + PORT)
