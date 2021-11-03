import { Request, Response } from 'express'

export const root_get = (req: Request, res: Response) => {
	res.render('home')
	return true
}
