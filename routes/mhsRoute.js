'use strict';
const express = require('express');
const file = require('../middleware/multer');

const route = express.Router();

const userController = require('../controller/userController');

route.get('/user', userController.getAllMhs);

route.post('/user', file.single('photo'), userController.createMhs);

route.put('/user/:idMhs', file.single('photo'), userController.updateMhs);

route.delete('/user/:idMhs', userController.deleteMhs);

module.exports = route;