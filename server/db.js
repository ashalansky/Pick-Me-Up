const { Pool }  = require( 'pg' )

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'pickmeup'
});

pool.query(`SELECT * FROM users`)
.then(res => {
  console.log(res.rows);
  return res.rows;
});
module.exports = pool;