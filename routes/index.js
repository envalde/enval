var express = require("express");
var router = express.Router();
var chat = require("../chatbot");

/* GET home page. */
router.get("/", function (req, res, next) {
  elements = chat.getRandomElements(5);
  res.render("index", { title: "Enval", chats: elements });
});

module.exports = router;
