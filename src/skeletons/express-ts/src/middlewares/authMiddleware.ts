import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import env from '@/utils/environment'
import { Err, Succ } from '@/services/globalService'
// import User from '@/models/User' // uncomment this

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
	const token = req.cookies.jwt
	new Err(500, 'uncomment code in authMiddleware before using!')
	/* 	if (token) {
		jwt.verify(token, env.JWT_SECRET, async (err: any, decodedToken: any) => {
			if (err) {
				// console.error(err.message)
				res.status(401).send(new Err(401, 'user is not authenticated'))
			}
			if (!err) {
				const user = await User.findByPk(decodedToken.id)
				if (user === null) {
					res.status(401).send(new Err(401, 'user is not authenticated'))
					return
				}
				res.locals.user = user
				new Succ(100, 'user is authenticated')
				next()
			}
		})
	}

	if (!token) {
		res.status(401).send(new Err(401, 'user is not authenticated'))
	} */
}
