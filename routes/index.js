var express = require("express");
var router = express.Router();
var chat = require("../chatbot");

/* GET home page. */
router.get("/", function (req, res, next) {
  elements = chat.getRandomElements(5);
  res.render("index", { title: "Enval", chats: elements });
});


router.get('/login', function (req, res, next) {
  res.render('login', {
    title: 'login'
  });
});
module.exports = router;
