const { Client } = require("pg");
const { argv } = require("node:process");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR ( 255 ),
  message VARCHAR ( 255 ),
  date DATE
);

INSERT INTO messages (author, message, date)
VALUES
  ('Hi there!', 'Amando', now()),
  ('Hello World!', 'Charles', now());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
