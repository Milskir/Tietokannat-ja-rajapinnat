const db = require("../config/db");

exports.getAll = async () => {
  const [rows] = await db.query("SELECT * FROM `opiskelija`");
  return rows;
};

exports.create = async (data) => {
  const { Etunimi, Sukunimi, Osoite, Luokkatunnus } = data;
  const [r] = await db.query(
    "INSERT INTO `opiskelija` (`Etunimi`,`Sukunimi`,`Osoite`,`Luokkatunnus`) VALUES (?,?,?,?)",
    [Etunimi ?? null, Sukunimi ?? null, Osoite ?? null, Luokkatunnus ?? null]
  );
  return r.insertId;
};

exports.update = async (id, data) => {
  const { Etunimi, Sukunimi, Osoite, Luokkatunnus } = data;
  const [r] = await db.query(
    "UPDATE `opiskelija` SET `Etunimi`=?,`Sukunimi`=?,`Osoite`=?,`Luokkatunnus`=? WHERE `idOpiskelija`=?",
    [Etunimi ?? null, Sukunimi ?? null, Osoite ?? null, Luokkatunnus ?? null, id]
  );
  return r.affectedRows > 0;
};

exports.remove = async (id) => {
  const [r] = await db.query("DELETE FROM `opiskelija` WHERE `idOpiskelija`=?", [id]);
  return r.affectedRows > 0;
};
