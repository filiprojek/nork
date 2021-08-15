const { Router } = require('express')
const sayHiMiddleware = require('./sayHiMiddleware')

const router = Router()

router.use(sayHiMiddleware)

module.exports = router
