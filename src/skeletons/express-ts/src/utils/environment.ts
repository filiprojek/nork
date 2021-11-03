import path from 'path'
require('dotenv').config({ path: path.join(__dirname, '../.env') })

export default {
	APP_PORT: Number(process.env.APP_PORT),
	DB_URI: String(process.env.DB_URI),
}
