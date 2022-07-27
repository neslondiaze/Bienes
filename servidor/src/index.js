require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { json } = require('express');
const cors = require('cors');
const { verifyToken } = require('./middleware/auth');


const app = express()

app.use(morgan('dev'))

app.use(json())
app.use(cors())

/* ROUTES */
app.use(require('./routes/api'))

/* app.use(require('./routes/api-notoken')) */
/*app.use(verifyToken)
app.use(require('./routes/index'))*/

/* PUBLIC */
app.use(express.static(path.join(__dirname, 'public')));

/* EJECUTA EL SERVIDOR */
const puerto = process.env.PUERTO || 5000;

app.listen(puerto, () => {
  console.log(`Servidor ejecutandose en puerto: ${puerto}`);
})
