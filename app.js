const express = require('express')
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const tipoEquipo = require('./routes/tipoEquipo')
const estado = require('./routes/estado')
const usuario = require('./routes/usuario')
const marca = require('./routes/marca')
const inventario = require('./routes/inventario')

// middlewares
app.use('/api/tiposequipos', tipoEquipo)
app.use('/api/estados', estado)
app.use('/api/usuarios', usuario)
app.use('/api/marcas', marca)
app.use('/api/inventarios', inventario)

module.exports = app