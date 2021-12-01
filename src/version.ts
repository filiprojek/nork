import fs from 'fs-extra'
import path from 'path'

export default class Version {
	static show(): string {
		const pkgJson = fs.readJsonSync(path.join(__dirname, '../package.json'))
		const log = `nork ${pkgJson.version}`
		return log
	}
}
