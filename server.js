const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.render("index", {
    style: "index",
    titel: "Startseite"
  });
});

app.get("/test/:id", function(req, res, next) {
  res.render("test", { output: req.params.id });
});

app.post("/ausgabe", (req, res, next) => {
  res.render("ausgabe", {
    style: "ausgabe",
    mitarbeiter: req.body.mitarbeiter,
    datum: req.body.datum,
    stunden: req.body.stunden
  });
});

app.listen(3000, () => {
  console.log("Server läuft");
});
