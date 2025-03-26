const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  password: 'libraayra',
  port: 5432,
});

module.exports = pool;
