// backend/user-service/models/userModel.js

const db = require('../config/db');

async function createUser(user) {
  const query = `
    INSERT INTO users (pro_id, u_id, first_name, last_name, phone_num, dob)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [user.pro_id, user.u_id, user.first_name, user.last_name, user.phone_num, user.dob];
  const result = await db.query(query, values);
  return result.rows[0];
}

async function getUserById(pro_id) {
  const query = 'SELECT * FROM users WHERE pro_id = $1;';
  const result = await db.query(query, [pro_id]);
  return result.rows[0];
}

async function updateUser(pro_id, user) {
  const query = `
    UPDATE users
    SET first_name = $1,
        last_name = $2,
        phone_num = $3,
        dob = $4
    WHERE pro_id = $5
    RETURNING *;
  `;
  const values = [user.first_name, user.last_name, user.phone_num, user.dob, pro_id];
  const result = await db.query(query, values);
  return result.rows[0];
}

async function deleteUser(pro_id) {
  const query = 'DELETE FROM users WHERE pro_id = $1 RETURNING *;';
  const result = await db.query(query, [pro_id]);
  return result.rows[0];
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
