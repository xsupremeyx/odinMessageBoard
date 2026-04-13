#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();
const URL = process.argv[2] || `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 50 ) NOT NULL,
  text VARCHAR ( 500 ),
  added TIMESTAMP DEFAULT NOW()
);

INSERT INTO messages (username, text) 
VALUES
  ('Yash','Click any card! Welcome to Mini Messageboard, click any card to read the full message.'),
  ('Yash','    How to post! Click ''New Message'' in the navbar. Fill in your name and message, then hit Submit!'),
  ('Example User','   Example Title!  The first 20 characters become your preview title on the board — so make them count!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();