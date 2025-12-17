const db = require("../config/db");

exports.getAll = async () => {
  const [rows] = await db.query("SELECT * FROM `arviointi`");
  return rows;
};

exports.create = async (data) => {
  const { idOpiskelija, idOpintojakso, Päivämäärä, Arvosana } = data;
  const [r] = await db.query(
    "INSERT INTO `arviointi` (`idOpiskelija`,`idOpintojakso`,`Päivämäärä`,`Arvosana`) VALUES (?,?,?,?)",
    [idOpiskelija, idOpintojakso, Päivämäärä ?? null, Arvosana ?? null]
  );
  return r.insertId;
};

exports.update = async (id, data) => {
  const { idOpiskelija, idOpintojakso, Päivämäärä, Arvosana } = data;
  const [r] = await db.query(
    "UPDATE `arviointi` SET `idOpiskelija`=?,`idOpintojakso`=?,`Päivämäärä`=?,`Arvosana`=? WHERE `idArviointi`=?",
    [idOpiskelija, idOpintojakso, Päivämäärä ?? null, Arvosana ?? null, id]
  );
  return r.affectedRows > 0;
};

exports.remove = async (id) => {
  const [r] = await db.query("DELETE FROM `arviointi` WHERE `idArviointi`=?", [id]);
  return r.affectedRows > 0;
};
