import mongoose from 'mongoose'
import { app } from '@/app'
import config from '@/utils/environment'
import { Err, Succ } from '@/services/globalService'

const port: Number = config.APP_PORT || 8080

// MongoDB
const dbURI: string = config.DB_URI
mongoose
	.connect(dbURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => {
		new Succ(200, 'connected to db')
		app.listen(port, () => {
			new Succ(200, `Server is listening on http://localhost:${port}`)
		})
	})
	.catch((err: any) => {
		new Err(500, err)
	})
