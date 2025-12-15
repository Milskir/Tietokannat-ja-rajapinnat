const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");


router.get("/", bookController.getAll);

router.post("/", bookController.create);

router.put("/:id", bookController.update);

router.delete("/:id", bookController.remove);

module.exports = router;
