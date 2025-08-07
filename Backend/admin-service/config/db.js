const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",         // change your db user
  host: "localhost",
  database: "Carboncredit",
  password: "amir123",
  port: 5432,
});

module.exports = pool;
