const fs = require("fs");
const http = require("http");
const port = 3000;

const renderHtml = function (port, res) {
  fs.readFile(`./page/${port}.html`, (err, data) => {
    if (err) {
      res.write(`get data ${url} error`);
    } else {
      res.write(data);
    }
    res.end();
  });
};

const server = function () {
  http
    .createServer((req, res) => {
      const url = req.url;
      res.writeHead(200, {
        // "content-type": "application/json",
        "content-type": "text/html",
      });

      if (url === "/") {
        renderHtml("index", res);
      } else if (url === "/detail") {
        renderHtml("detail", res);
      } else if (url === "/kontak") {
        renderHtml("kontak", res);
      } else {
        renderHtml("error", res);
      }
    })
    .listen(port, () => {
      console.log(`server ${port} is running`);
    });
};

module.exports.server = server;
