require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Library REST API running" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});