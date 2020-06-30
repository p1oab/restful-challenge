const Pool = require('pg').Pool
const db = new Pool({
    user: 'gmdb_app',
    host: 'localhost',
    database: 'gmdb',
    password: '123',
    port: 5432
})

module.exports = db;