const Muebles = require('../models/Muebles')
const MueblesController = {}

MueblesController.index = async (req, res) => {
  const muebles = await Muebles.get()
  res.json(muebles)
}

module.exports = MueblesController