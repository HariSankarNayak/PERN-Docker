const {Pool} = require('pg');

module.exports = new Pool({
  max: 10,
  connectionString: process.env.DATABASE_URL  || "psql postgres://azularc:azularc@localhost:35432/db"
});
