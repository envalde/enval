var express = require("express");
var router = express.Router();

const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const db = require('../lib/database');
const userMiddleware = require('../middleware/users');

router.post('/login', (req, res, next) => {
    res.send('Hier werden die Login Daten weiterverarbeitet');
});


module.exports = router;
