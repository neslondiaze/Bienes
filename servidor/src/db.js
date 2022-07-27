const mysql = require('mysql')
const { promisify } = require('util')
const { database } = require('../keys')

const pool = mysql.createPool(database)

pool.getConnection((err, connection) => {
  if (err) {
    console.error('error conecting: ' + err.stack);
    return
  }

  console.log('connected as id ' + connection.threadId);
})

pool.query = promisify(pool.query)
exports.pool = pool;