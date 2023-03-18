const { Router } = require('express')
const {createEstado, getEstados} =
 require('../controllers/estado')

const router = Router()

// crear
router.post('/', createEstado)

// consultar todos
router.get('/', getEstados)

module.exports = router;