var express = require("express");
var router = express.Router();

const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const db = require('../lib/database');
const userMiddleware = require('../middleware/users');

router.post('/login', (req, res, next) => {
    db.query('SELECT * FROM users WHERE username = "enval"',
        (err, result) => {
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: err
                });
            }
            if(!result.length) {
                // return res.status(401).send([{
                //     msg: 'Username oder Passwort sind inkorrekt'
                // }]);
                res.send('Username oder Passwort sind inkorrekt');
            }

            //check password
            bcrypt.compare(
                req.body.compare, result[0]['password'], (bErr, bResult) => {
                    if(bErr) {
                        throw bErr;
                        // return res.status(401).send({
                        //     msg: "Username oder Password sind inkorrekt"
                        // });
                        res.send('Username oder Passwort sind inkorrekt');
                    }

                    if(bResult) {
                        const token = jwt.sign({
                            username: result[0].username,
                            userId: result[0].id
                        },
                        process.env.SECRET_KEY , {
                            expiresIn: '1h'
                        });
                    }

                    db.query('UPDATE users SET last_login = now() WHERE id = ${result[0].id}');
                    return res.status(200).send({
                        msg: 'Eingeloggt',
                        token,
                        user: result[0]
                    });
                }
            );

        }
    );
});


module.exports = router;
