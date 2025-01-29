const fs = require("fs");
const yargs = require("yargs");
const { stdin: input, stdout: output } = require("process");
// const readline = require("readline");

// const rl = readline.createInterface({ input, output });

const dataPath = "./data";
if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath);
}
const filePath = "./data/contacts.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]");
}

// const masukkanData = (ditanya) => {
//   return new Promise((resolve, reject) => {
//     rl.question(`Masukkan ${ditanya} anda: `, (result) => {
//       resolve(result);
//     });
//   });
// };

// const isiPertanyaan = async function (pertanyaan) {
//   let valueContact = {};
//   for (const item of pertanyaan) {
//     valueContact[item] = await masukkanData(item);
//   }

//   const fileValue = JSON.parse(fs.readFileSync(filePath, "utf-8"));
//   fileValue.push(valueContact);
//   fs.writeFileSync(filePath, JSON.stringify(fileValue));
//   rl.close();
// };

const isiPertanyaan = function (nama, email, nohp) {
  let valueContact = { nama: nama, email: email, nohp: nohp };

  const fileValue = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  fileValue.push(valueContact);
  fs.writeFileSync(filePath, JSON.stringify(fileValue));
};

const yargsFun = function () {
  yargs.command(
    "add",
    "untuk menambahkan data",
    {
      nama: {
        describe: "digunakan untuk menginputkan nama",
        type: "string",
        demandOption: true,
      },
      email: {
        describe: "digunakan untuk menginputkan email",
        type: "string",
        demandOption: false,
      },
      nohp: {
        describe: "digunakan untuk menginputkan nomor hp",
        type: "string",
        demandOption: false,
      },
    },
    function (argv) {
      isiPertanyaan(argv.nama, argv.email, argv.nohp);
    }
  );

  yargs.parse();
};

module.exports.yargsFun = yargsFun;
