const db = require("../config/database");
const mysql = require("mysql2/promise");

const insertJenisBahan = async function (p_namajenis) {
    const connection = await mysql.createConnection(db);
    try {
      const [rows] = await connection.execute(
        "CALL tambah_jenisbahan(?)",
        [p_namajenis]
      );
      if (rows && rows.length > 0) {
        return rows[0]; // Mengembalikan penyewa pertama yang ditemukan
      } else {
        return null; // Mengembalikan null jika penyewa tidak ditemukan
      }
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  };

  module.exports = {
    insertJenisBahan
  };