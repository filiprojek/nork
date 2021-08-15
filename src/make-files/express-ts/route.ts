import { Router } from 'express'
const rootController = require('../controllers/rootController')

const router = Router()

router.get('/', rootController.root_get)

module.exports = router
