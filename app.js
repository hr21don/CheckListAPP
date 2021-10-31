//jshint esversion:6

const express = require("express");
const ejs = require('ejs');
const date = require(__dirname + "/date.js");

//start express application
const app = express();

const new_items = ["Buy Food", "Cook Food" ,"Eat Food"];
const work_items = [];

//render template files using the view engine
app.set('view engine', 'ejs');

//Setting up our static path and Body Parser
app.use(express.urlencoded({extended:true}));
app.use(express.static("Public"));

// setting up Home route
app.get("/", function(req, res){
const day = date.get_Date();
res.render("list", {listtitle: day , newlistitems: new_items});
});

//Our post function that grabs data they send to us
app.post("/", function(req,res){
  const item = req.body.NewItemText;
  if(req.body.list === "work"){
    work_items.push(item);
    res.redirect("/work");
  }else{
    new_items.push(item);
    res.redirect("/");
  }
});

//setting up work route
app.get("/work" , function(req,res){
  res.render("list", {listtitle: "work list", newlistitems:work_items});
});

//set up express server
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
