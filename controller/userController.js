"use strict";
const userModel = require("../model/user"); 

const getAllMhs = async (req, res) => {
  let data;
  try {
    [data] = await userModel.getAllMhs();
  } catch (error) {
    res.status(500).json({
      message: "failed server",
    });
  }
  res.json({
    message: "succsess",
    data: data,
  });
};

const createMhs = async (req, res) => {
  const { nama, nim, jurusan } = req.body;
  const photo = req.file ? req.file.filename : null;
  const newMhs = {nama, nim, jurusan, photo};
  try {
    await userModel.createMhs(newMhs);
  } catch (error) {
    res.status(500).json({
      message: `failed server : ${error}`,
    });
  }
  res.json({
    message: "succsess",
    data: newMhs,
  });
};

const updateMhs = async (req, res) => {
  const { nama, nim, jurusan } = req.body;
  const photo = req.file ? req.file.filename : null;
  const newMhs = {nama, nim, jurusan, photo};
  try {
    await userModel.updateMhs(newMhs, req.params.idMhs);
  } catch (error) {
    res.status(500).json({
      message: `failed server: ${error}`,
    });
  }
  res.json({
    message: "succsess",
    data: {
      id: req.params.idMhs,
      body: newMhs,
    },
  });
};

const deleteMhs = async (req, res) => {
  try {
    await userModel.deleteMhs(req.params.idMhs);
  } catch (error) {
    res.status(500).json({
      message: `failed server: ${error}`,
    });
  }
  res.json({
    message: `succsess delete data where id ${req.params.idMhs}`,
  });
};

module.exports = { getAllMhs, createMhs, updateMhs, deleteMhs };
