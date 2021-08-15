import path from 'path'
require('dotenv').config({ path: path.join(__dirname, '../.env') })

module.exports = {
	APP_PORT: process.env.APP_PORT,
	DB_URI: process.env.DB_URI,
}
