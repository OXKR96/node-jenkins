const { Router } = require('express')
const { createMarca, getMarcas} =
 require('../controllers/marca')

const router = Router()

// crear
router.post('/', createMarca)

// consultar todos
router.get('/', getMarcas)

module.exports = router;