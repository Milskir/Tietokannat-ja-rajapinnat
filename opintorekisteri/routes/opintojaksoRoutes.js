const express = require("express");
const r = express.Router();
const c = require("../controllers/opintojaksoController");

r.get("/", c.getAll);
r.post("/", c.create);
r.put("/:id", c.update);
r.delete("/:id", c.remove);

module.exports = r;
