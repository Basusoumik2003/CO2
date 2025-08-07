// backend/user-service/models/addressModel.js

const db = require('../config/db');

async function createAddress(address) {
  const query = `
    INSERT INTO addresses (pro_id, area, city, state, country, pin_code, label)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;
  const values = [address.pro_id, address.area, address.city, address.state, address.country, address.pin_code, address.label];
  const result = await db.query(query, values);
  return result.rows[0];
}

async function getAddressesByProId(pro_id) {
  const query = 'SELECT * FROM addresses WHERE pro_id = $1;';
  const result = await db.query(query, [pro_id]);
  return result.rows;
}

async function updateAddress(address_id, address) {
  const query = `
    UPDATE addresses
    SET area = $1,
        city = $2,
        state = $3,
        country = $4,
        pin_code = $5,
        label = $6
    WHERE address_id = $7
    RETURNING *;
  `;
  const values = [address.area, address.city, address.state, address.country, address.pin_code, address.label, address_id];
  const result = await db.query(query, values);
  return result.rows[0];
}

async function deleteAddress(address_id) {
  const query = 'DELETE FROM addresses WHERE address_id = $1 RETURNING *;';
  const result = await db.query(query, [address_id]);
  return result.rows[0];
}

module.exports = {
  createAddress,
  getAddressesByProId,
  updateAddress,
  deleteAddress,
};
