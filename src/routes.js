const express = require('express');
const BoxController = require('./controllers/BoxController');
const routes = express.Router();

routes.post('/boxes', BoxController.store);

module.exports = routes;