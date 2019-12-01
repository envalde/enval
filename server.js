var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("index", {
    titel: "Test",
    test: "Hallo"
  });
});

app.listen(3000);
