const Pool = require('pg').Pool;
const pool = new Pool({
 user: "postgres",
 password: "Microsoft17", 
 host: "localhost",
 port: 5432,
 
 
});

module.exports = pool;
