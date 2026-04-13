const { Pool } = require("pg");

module.exports = new Pool({
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "postgres",
    database: process.env.DATABASE_NAME || "messageboard",
    password: process.env.DATABASE_PASSWORD || "pwd",
    port: process.env.DATABASE_PORT || 5432,
})