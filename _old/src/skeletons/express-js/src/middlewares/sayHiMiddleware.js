const { Router } = require('express')

const router = Router()

router.use((req, res, next) => {
	console.log('Hi :)')
	next()
})

module.exports = router
