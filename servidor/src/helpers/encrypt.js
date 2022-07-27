const crypto = require('crypto')
const encrypt = {}

encrypt.encriptar = (data) => {
  return crypto.createHash('shake256').update(data).digest('hex')
}

module.exports = encrypt