const db = require('../db')
const { encriptar } = require('../helpers/encrypt')

const Usuario = {}

/* USUARIOS */
Usuario.get = async () => {
  return await db.pool.query(`SELECT * FROM TblUsuarios`)
}

Usuario.find = async (id) => {
  return await db.pool.query(`SELECT * FROM TblUsuarios WHERE IdUsuario=?`, [id])
}

Usuario.create = async (data) => {
  return await db.pool.query(`INSERT INTO TblUsuarios SET ?`, [data])
}

Usuario.update = async (id, data) => {
  return await db.pool.query(`UPDATE TblUsuarios SET ? WHERE IdUsuario=?`, [data, id])
}

Usuario.delete = async (id) => {
  return await db.pool.query(`DELETE FROM TblUsuarios WHERE  IdUsuario=?`, [id])
}




Usuario.signin = async (data) => {
  data.passaword = encriptar(data.passaword)
  return await db.pool.query(`SELECT * FROM TblUsuarios WHERE NomUsuario=? and passUsuario=?`, [data.NomUsuario, data.passUsuario]);
}

module.exports = Usuario