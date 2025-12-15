const db = require("../config/db");

async function getAllBooks() {
  const [rows] = await db.query("SELECT * FROM book");
  return rows;
}

async function addBook(book) {
  const { name, author, isbn } = book;
  const [result] = await db.query(
    "INSERT INTO book (name, author, isbn) VALUES (?, ?, ?)",
    [name, author, isbn]
  );
  return result.insertId;
}


async function updateBook(id, book) {
  const { name, author, isbn } = book;
  const [r] = await db.query(
    "UPDATE book SET name=?, author=?, isbn=? WHERE id_book=?",
    [name, author, isbn, id]
  );
  return r.affectedRows > 0;
}


async function deleteBook(id) {
  const [r] = await db.query(
    "DELETE FROM book WHERE id_book=?",
    [id]
  );
  return r.affectedRows > 0;
}


module.exports = {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook
};
