const { getReq, getRes } = require('./modules/reqRes.module.js')
const { root_get } = require('../controllers/rootController.js')

test('Home page render test', () => {
	const req = getReq()
	const res = getRes()

	expect(root_get(req, res)).toBe(true)
})
