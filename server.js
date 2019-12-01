const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("index", {
    titel: "Home",
    cssFile: "Hallo"
  });
});

app.listen(3000);
