// import database
const db = require("../config/database")

// membuat class Patient
class Patient {
  // buat fungsi
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM patients`;
      db.query(query, (err, results) => {
        return resolve(results);
      });
    });
  }

  static async create(data) {
    // melakukan insert data ke database
    data.timestamp = new Date();
    const id = await new Promise((resolve, reject) => {
      const sql = `INSERT INTO patients SET ?`;
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    // menampilkan data yang baru saja diinsert
    const pasient = this.find(id);
    return pasient;
  }

  static async update(id, data) {
    // melakukan update data ke database
    await new Promise((resolve, reject) => {
      const sql = `UPDATE patients SET ? WHERE id = ?`;
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    // menampilkan data yang baru saja diupdate
    const pasient = await this.find(id);
    return pasient;
  }

  static async delete(id) {
    // melakuka delete data ke database
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM patients WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  static find(id) {
    // menampilakn data dengan id yang ditentukan
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        const [pasient] = results;
        resolve(pasient);
      });
    });
  }

  static search(name) {
    // menampilkan data berdasarkan nama yang dicari
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients WHERE name = ?`;
      db.query(sql, name, (err, results) => {
        const [pasient] = results;
        resolve(pasient);
      });
    });
  }

  static findByStatus(status) {
    // menampilkan data sesuai status yang diminta
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients WHERE status = ?`;
      db.query(sql, status, (err, results) => {
        const [pasient] = results;
        resolve(pasient);
      });
    });
  }

  static count(status) {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const query = `SELECT COUNT(*) FROM patients WHERE status = ?`;
      db.query(query, status, (err, results) => {
        return resolve(results);
      });
    });
  }
}

// export class Patient
module.exports = Patient;
