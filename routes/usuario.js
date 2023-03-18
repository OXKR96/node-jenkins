const { Router } = require('express')
const {createUsuario, getUsuarios} =
 require('../controllers/usuario')

const router = Router()

// crear
router.post('/', createUsuario)

// consultar todos
router.get('/', getUsuarios)

module.exports = router;