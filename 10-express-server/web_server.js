const express = require("express");
const app = express();
const port = 3000;

const server = function () {
  // contoh ketika kita ingin mengirimkan asset
  app.use(express.static('public'));


  // ini adalah contoh middleware
  app.use((req, res, next)=>{
    console.log('ini adalah middleware');
    next();
  });


  app.get("/", (req, res) => {
    res.sendFile('./page/index.html', {root: __dirname});
  });
  app.get("/detail", (req, res) => {
    res.sendFile('./page/detail.html', {root: __dirname});
  });
  app.get("/kontak", (req, res) => {
    res.sendFile('./page/kontak.html', {root: __dirname});
  });
  app.get("/produk/:id", (req, res) => {
    // contoh penggunaan : http://localhost:3000/produk/2?name=sendal
    res.send(`<h1>ini adalah produk ${req.query.name} dengan id : ${req.params.id}</h1>`);
    // output : ini adalah produk sendal dengan id : 2
  });
  app.use("/", (req, res) => {
    res.status(404);
    res.sendFile('./page/error.html', {root: __dirname});
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
};

module.exports.server = server;
