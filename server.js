const express = require('express');
const app = express();
const port = 3000;

const mhsRoute = require('./routes/mhsRoute');
const upload = require('./middleware/multer');

app.use(express.json());
app.use(mhsRoute);
app.use(express.static('public'));

app.get('/', (req, res)=>{
   res.send('Sukses Get');
});

app.post('/', (req, res)=>{
   res.send('Sukses Post');
});

// single photo itu adalah key untuk dipostman
app.post('/upload', upload.single('photo'), (req, res)=>{
    res.json({
      message: 'succsess upload file'
    });
});

// untuk membaca error ketika mendapati error
app.use((err, req, res, next)=>{
   res.json({
      message: `error : ${err}`
   });
   next();
})

app.listen(port, ()=>{
   console.log(`Server is running in port: ${port}`);
})