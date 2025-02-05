const mysql = require('mysql2');

const conn = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'belajar_rest_node'
});

module.exports = conn.promise();