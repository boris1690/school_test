const { Pool } = require("pg");
const { env } = require("./env");

console.log(env.DATABASE_URL);
const db = new Pool({
  connectionString: env.DATABASE_URL,
});

module.exports = { db };
