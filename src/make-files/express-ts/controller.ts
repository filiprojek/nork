import { Request, Response } from 'express'

const root_get = (req: Request, res: Response) => {
	res.render('home')
	return true
}

module.exports = {
	root_get,
}
