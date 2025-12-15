const Book = require("../models/bookModel");

exports.getAll = async (req, res) => {
  try {
    const books = await Book.getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const id = await Book.addBook(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const ok = await Book.updateBook(req.params.id, req.body);
    if (!ok) return res.status(404).json({ error: "Not found" });
    res.json({ updated: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const ok = await Book.deleteBook(req.params.id);
    if (!ok) return res.status(404).json({ error: "Not found" });
    res.json({ deleted: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
