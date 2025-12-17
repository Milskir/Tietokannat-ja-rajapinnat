const db = require("../config/db");

exports.getAll = async () => {
  const [rows] = await db.query("SELECT * FROM `opintojakso`");
  return rows;
};

exports.create = async (data) => {
  const { Nimi, Laajuus, Tunnus, Kuvaus } = data;
  const [r] = await db.query(
    "INSERT INTO `opintojakso` (`Nimi`,`Laajuus`,`Tunnus`,`Kuvaus`) VALUES (?,?,?,?)",
    [Nimi ?? null, Laajuus ?? null, Tunnus ?? null, Kuvaus ?? null]
  );
  return r.insertId;
};

exports.update = async (id, data) => {
  const { Nimi, Laajuus, Tunnus, Kuvaus } = data;
  const [r] = await db.query(
    "UPDATE `opintojakso` SET `Nimi`=?,`Laajuus`=?,`Tunnus`=?,`Kuvaus`=? WHERE `idOpintojakso`=?",
    [Nimi ?? null, Laajuus ?? null, Tunnus ?? null, Kuvaus ?? null, id]
  );
  return r.affectedRows > 0;
};

exports.remove = async (id) => {
  const [r] = await db.query("DELETE FROM `opintojakso` WHERE `idOpintojakso`=?", [id]);
  return r.affectedRows > 0;
};
