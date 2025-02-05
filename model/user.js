"use strict";
const db = require("../config/db");

const getAllMhs = () => {
  const SQLQuery = "SELECT * FROM mahasiswa";

  return db.execute(SQLQuery);
};

const createMhs = (body) => {
  const SQLQuery = `INSERT INTO mahasiswa (nama, jurusan, nim, photo) VALUES ('${body.nama}','${body.jurusan}','${body.nim}','${body.photo}')`;

  return db.execute(SQLQuery);
};

const updateMhs = (body, idMhs) => {
  const SQLQuery = `UPDATE mahasiswa 
                      SET nama = ?, nim = ?, jurusan = ?, photo = ?
                      WHERE id = ?`; // Gunakan placeholder ?

  // Pass parameter sebagai array [body.nama, body.nim, body.jurusan, idMhs]
  return db.execute(SQLQuery, [body.nama, body.nim, body.jurusan, body.photo, idMhs]);
};


const deleteMhs = (idMhs) => {
  const SQLQuery = `DELETE FROM mahasiswa WHERE id = ?`; // Gunakan placeholder ?

  // Pass parameter sebagai array [body.nama, body.nim, body.jurusan, idMhs]
  return db.execute(SQLQuery, [idMhs]);
};

module.exports = { getAllMhs, createMhs, updateMhs, deleteMhs };
