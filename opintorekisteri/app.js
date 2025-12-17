require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const opiskelijaRoutes = require("./routes/opiskelijaRoutes");
const opintojaksoRoutes = require("./routes/opintojaksoRoutes");
const arviointiRoutes = require("./routes/arviointiRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => res.json({ message: "Opintorekisteri API running" }));

app.use("/api/opiskelijat", opiskelijaRoutes);
app.use("/api/opintojaksot", opintojaksoRoutes);
app.use("/api/arvioinnit", arviointiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
