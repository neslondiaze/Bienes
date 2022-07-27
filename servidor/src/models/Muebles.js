const db = require('../db')

const Muebles = {}

Muebles.get = async () => {
  return await db.query(`SELECT * FROM TblMuebles`)
}

module.exports = Muebles