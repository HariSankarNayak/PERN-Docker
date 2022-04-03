const sql = require('sql-template-strings');
const { v4: uuidv4 } = require('uuid');
const db = require('./db');

module.exports = {
  async create(name, age, email, dob, address, photo) {
    try {

      const { rows } = await db.query(sql`
      INSERT INTO employees (id, name , age, email, dob , address, photo)
        VALUES (${uuidv4()}, ${name}, ${age},  ${email} , ${dob}, ${address}, ${photo})
        RETURNING id, email;
      `);

      const [employee] = rows;
      return employee;
    } catch (error) {
      if (error.constraint === 'employees_email_key') {
        return null;
      }

      throw error;
    }
  },
  async findByEmail(email) {
    const { rows } = await db.query(sql`
    SELECT * FROM employees WHERE email=${email} LIMIT 1;
    `);
    return rows[0];
  },
  async findById(id) {
    const { rows } = await db.query(sql`
    SELECT * FROM employees WHERE id=${id} LIMIT 1;
    `);
    return rows[0];
  },
  async findAll() {
    const { rows } = await db.query(sql`
    SELECT * FROM employees;
    `);
    console.log(rows);
    return rows;
  },
  async update(id, name, age, email, dob, address, photo) {
    const { rows } = await db.query(sql`
    UPDATE employees SET name=${name}, age=${age}, email=${email}, dob=${dob}, address=${address}, photo=${photo} WHERE id=${id} RETURNING *;
    `);
    return rows[0];
  },
  async delete(id) {
    const { rows } = await db.query(sql`
    DELETE FROM employees WHERE id=${id} RETURNING *;
    `);
    return rows[0];
  },
  async deleteAll() {
    const { rows } = await db.query(sql`
    DELETE FROM employees;
    `);
    return rows;
  }
};
