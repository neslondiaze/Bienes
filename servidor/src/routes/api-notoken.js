const express = require('express');
const UsuarioController = require("../controllers/UsuarioController");

const routes = express.Router();

routes.post('/api/login', UsuarioController.login);

module.exports = routes;