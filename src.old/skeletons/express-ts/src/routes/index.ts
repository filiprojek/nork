import { Router } from 'express'
const rootRoutes = require('./rootRoutes')

const router = Router()

router.use(rootRoutes)

// 404
router.use((req, res) => {
	res.status(404).send('E404')
})

module.exports = router
