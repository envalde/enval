const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    database: process.env.MY_SQL_DATABASE,
    password: process.env.PASSWORD
});

connection.connect();

module.exports = connection;