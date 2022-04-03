const db = require('../persistence/db');

module.exports.up = async function (next) {
  const client = await db.connect();

  await client.query(`
  CREATE TABLE IF NOT EXISTS employees (
    id uuid PRIMARY KEY,
    name varchar(255) NOT NULL,
    age int NOT NULL,
    email text UNIQUE,
    dob date,
    address text,
    photo text
    
  );


  `);

  await client.query(`
  CREATE INDEX users_email on employees (email);
  `);

  await client.release(true);
  next();
};

module.exports.down = async function (next) {
  const client = await db.connect();

  await client.query(`
  DROP TABLE employees;
  `);

  await client.release(true);
  next();
};
