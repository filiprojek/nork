import inquirer from 'inquirer'
import fs from 'fs-extra'
import path from 'path'
import Global from './global'
import { Questions } from './interfaces/SetupInterface'

export default class Setup {
	static async setup(test = false) {
		if (!test) {
			const questions: Questions = {
				type: 'list',
				message: `Pick the technology you're using:`,
				name: 'lang',
				choices: [
					{ name: 'Typescript', value: 'ts' },
					{ name: 'Javascript', value: 'js' },
				],
			}
			const answers = await inquirer.prompt(Object(questions))
			fs.writeJsonSync(path.join(process.cwd(), './norkconfig.json'), answers)
		}
		return Global.logSuccess()
	}
}
