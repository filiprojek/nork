import path from 'path'
import fs from 'fs-extra'
import global from './global'
import { Norkcfg } from './interfaces/GlobalInterface'

export default class Make {
	static component(component: string) {
		// const norkcfg = require(path.join(process.cwd(), 'norkconfig.json'))
		const norkcfg: Norkcfg = fs.readJsonSync(path.join(process.cwd(), 'norkconfig.json'))

		const tsComponents = ['controller', 'middleware', 'route', 'service']

		if (tsComponents.includes(component)) {
			const src = path.join(__dirname, './make-files/express-' + norkcfg.lang + '/' + component + '.' + norkcfg.lang)
			const dest = path.join(process.cwd(), './src/' + component + 's' + '/' + process.argv[4] + '.' + norkcfg.lang)

			try {
				fs.copySync(src, dest, { overwrite: false, errorOnExist: true })
			} catch (err: any) {
				return global.logError(err.message)
			}
			return global.logSuccess()
		}

		if (component == 'model') {
			const src = path.join(__dirname, './make-files/express-' + norkcfg.lang + '/' + component + '.' + norkcfg.lang)
			const dest = path.join(process.cwd(), './src/' + component + 's' + '/' + process.argv[4] + '.' + norkcfg.lang)
			try {
				fs.copySync(src, dest, { overwrite: false, errorOnExist: true })
			} catch (err: any) {
				return global.logError(err.message)
			}
			return global.logSuccess()
		}

		if (component == 'view') {
			const src = path.join(__dirname, './make-files/express-' + norkcfg.lang + '/' + component + '.ejs')
			const dest = path.join(process.cwd(), './src/' + component + 's' + '/' + process.argv[4] + '.ejs')

			try {
				fs.copySync(src, dest, { overwrite: false, errorOnExist: true })
			} catch (err: any) {
				return global.logError(err.message)
			}
			return global.logSuccess()
		}

		if (component == 'test') {
			const src = path.join(__dirname, './make-files/express-' + norkcfg.lang + '/' + component + '.js')
			const dest = path.join(process.cwd(), './src/' + component + 's' + '/' + process.argv[4] + '.test.js')

			try {
				fs.copySync(src, dest, { overwrite: false, errorOnExist: true })
			} catch (err: any) {
				return global.logError(err.message)
			}
			return global.logSuccess()
		}
		if (component == 'interface') {
			if (norkcfg.lang != 'ts') {
				return global.logError('error - this is typescript only component')
			}
			const src = path.join(__dirname, './make-files/express-' + norkcfg.lang + '/' + component + '.ts')
			const dest = path.join(process.cwd(), './src/' + component + 's' + '/' + process.argv[4] + '.ts')

			try {
				fs.copySync(src, dest, { overwrite: false, errorOnExist: true })
			} catch (err: any) {
				return global.logError(err.message)
			}
			return global.logSuccess()
		}

		return global.logError(`error - unknown component ${component}`)
	}
}
