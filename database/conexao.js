const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Temaki123@',
    database: 'agenda_petshop',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = conexao