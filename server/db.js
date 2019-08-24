const { Pool }  = require( 'pg' );

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'pickmeup'
});

pool.query(`SELECT * FROM users`)
.then(res => res.rows);

module.exports = pool;