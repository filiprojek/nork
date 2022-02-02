import { Sequelize } from 'sequelize'
import config from '@/utils/environment'

const db = new Sequelize(config.DB_DATABASE, config.DB_USERNAME, config.DB_PASSWORD, {
	host: config.DB_HOST,
	dialect: 'postgres',
	logging: false,
})

export default db
