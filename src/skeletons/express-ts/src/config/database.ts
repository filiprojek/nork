import mongoose from 'mongoose'
import config from '@/utils/environment'
import { Err, Succ } from '@/services/globalService'
import db from '@/config/postgres.config'

// MongoDB
const dbURI: string = config.DB_URI
function connect() {
	if (!config.NORK.db) {
		new Err(500, 'no database is in norkcfg.json')
		return false
	}

	if (config.NORK.db == 'mongodb') {
		mongoose
			.connect(dbURI, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
			})
			.then(() => {
				new Succ(200, 'connected to db')
				return true
			})
			.catch((err: any) => {
				new Err(500, err)
				return false
			})
	}

	if (config.NORK.db == 'postgresql') {
		db.sync()
			.then(() => {
				new Succ(200, 'connected to db')
				return true
			})
			.catch((err: any) => {
				new Err(500, `Can't connect to db\n${err}`)
				return false
			})
	}

	if (config.NORK.db.length > 0) {
		new Err(500, `unsupported database ${config.NORK.db}`)
		return false
	}
}

export default connect
