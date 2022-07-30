const express = require('express')
const UsuarioController = require('../controllers/UsuarioController')
const routes = express.Router()

routes.get('/', (req, res) => {
  res.send('Hola mundo')
})

/* USUARIOS */
routes.get('/api/get-usuarios', UsuarioController.index)
routes.get('/api/get-usuario/:id', UsuarioController.show)
routes.post('/api/store-usuario', UsuarioController.store)
routes.post('/api/update-usuario', UsuarioController.update)
routes.delete('/api/delete-usuario/:id', UsuarioController.destroy)

//routes.get('api/get-muebles', MueblesController.index)

module.exports = routes