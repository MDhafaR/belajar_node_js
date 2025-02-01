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

const bacaData = function () {
  const fileValue = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return fileValue;
};

const isiPertanyaan = function (nama, email, nohp) {
  let valueContact = { nama: nama, email: email, nohp: nohp };

  const data = bacaData();

  data.push(valueContact);
  fs.writeFileSync(filePath, JSON.stringify(data));
};

const listContacs = function () {
  const data = bacaData();
  console.log("Daftar Nama :");

  data.forEach((contact, i) => {
    console.log(`${i + 1}. nama: ${contact.nama}, nomor: ${contact.nohp}`);
  });
};

const detailContact = function (nama) {
  const data = bacaData();
  const contact = data.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  if (!contact) {
    console.log("tidak ada nama dalam daftar");
  } else {
    console.log(`nama  : ${contact.nama}`);
    if (contact.email) {
      console.log(`email : ${contact.email}`);
    }
    console.log(`nomor : ${contact.nohp}`);
  }
};

const deleteContact = function (nama) {
  const data = bacaData();

  const newData = data.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );

  if (newData.length === data.length) {
    console.log(`Kontak ${nama} tidak ditemukan.`);
  } else {
    console.log(`Kontak ${nama} berhasil dihapus.`);

    newData.forEach((contact, i) => {
      console.log(`${i + 1}. nama: ${contact.nama}, nomor: ${contact.nohp}`);
    });
  }
};

const yargsFun = function () {
  yargs
    .command(
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
    )
    .demandCommand();

  yargs.command({
    command: "list",
    describe: "untuk melihat seluruh nama yang terdaftar",
    handler() {
      listContacs();
    },
  });

  yargs.command({
    command: "detail",
    describe: "mencari detail data dari nama lengkap yang terdaftar",
    builder: {
      nama: {
        describe: "digunakan untuk menginputkan nama lengkap",
        type: "string",
        demandOption: true,
      },
    },
    handler(argv) {
      detailContact(argv.nama);
    },
  });

  yargs.command({
    command: "delete",
    describe: "mengapus data menggunakan nama lengkap",
    builder: {
      nama: {
        describe: "digunakan untuk menginputkan nama lengkap",
        type: "string",
        demandOption: true,
      },
    },
    handler(argv) {
      deleteContact(argv.nama);
    },
  });

  yargs.parse();
};

module.exports.yargsFun = yargsFun;
