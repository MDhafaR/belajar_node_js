// untuk mengambil core module kita tidak perlu path file
const fs = require("fs");

// menulis
// try {
//   fs.writeFileSync("haloSync.txt", "hai semua, ini adalah penulisan sync");
// } catch (error) {
//   console.error(error);
// }

// fs.writeFile("./async folder/haloAsync.txt", "hai semua, ini adalah penulisan sync", (error) =>
//   console.error(error)
// );

// membaca
try {
  console.log(fs.readFileSync("haloSync.txt").toString());
} catch (error) {
  console.error(error);
}

  fs
    .readFile("./async folder/haloASync.txt", (error, data) => console.log(data.toString()));