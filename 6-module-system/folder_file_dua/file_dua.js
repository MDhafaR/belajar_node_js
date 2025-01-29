const mixName = (nama1, nama2) => {
    console.log(`kita adalah ${nama1} dan ${nama2}`);
}

const mixUmur = (tahun1, tahun2) => {
    const tahunSekarang = new Date().getFullYear()
    const umur1 = tahunSekarang - tahun1;
    const umur2 = tahunSekarang - tahun2;
    console.log(`umur saya dan kliju jika ditambah adalah ${umur1 + umur2}`);
}

module.exports.mixName = mixName;
module.exports.mixUmur = mixUmur;