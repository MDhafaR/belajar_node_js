const multer = require("multer");

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        // null berarti error tidak ada
        cb(null, 'public');
    },
    filename:(req, file, cb)=>{
        const timeStamp = new Date().getTime();
        const originalName = file.originalname;

        cb(null, `${timeStamp}-${originalName}`);
    }
});

const upload = multer({storage: storage});

module.exports = upload;