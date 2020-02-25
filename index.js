const express = require("express");
var app = express();
app.use(express.static("public"));
//app.get("/",express.static("public"));
app.listen(5000, ()=>{
    console.log("now listening on 5000");
});