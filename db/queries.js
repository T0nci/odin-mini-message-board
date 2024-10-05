const db = require("./pool");

const getAllMessages = async () => {
  const { rows } = await db.query("SELECT * FROM messages");
  return rows;
};

const createMessage = async (author, message) => {
  await db.query(
    `INSERT INTO messages (author, message, date)
    VALUES ($1, $2, now())`,
    [author, message],
  );
};

const getMessageById = async (id) => {
  const messageID =
    typeof Number(id) === "number" && !isNaN(Number(id)) ? Number(id) : 0;

  const { rows } = await db.query("SELECT * FROM messages WHERE id = $1", [
    messageID,
  ]);

  return rows;
};

module.exports = {
  getAllMessages,
  createMessage,
  getMessageById,
};
