const express = require("express");
const path = require('path')
var app = express();
app.use(express.static(path.join(__dirname, "public")));
//app.get("/",express.static("public"));
var port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`now listening on ${port}`);
});