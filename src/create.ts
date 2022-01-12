import pad from 'pad'
import colors from 'colors'
import fs from 'fs-extra'
import path from 'path'
import global from './global'
import { Create as CreateInterface } from './interfaces/CreateInterface'
import inquirer from 'inquirer'

export default class Create {
	static async project(projectName: string | boolean = false) {
		// get info about new project
		let projectPath
		const questions = [
			{
				type: 'input',
				name: 'project_name',
				message: 'Enter project name:',
			},
			{
				type: 'list',
				message: `Pick the technology you're using:`,
				name: 'lang',
				choices: [
					{ name: 'Typescript', value: 'ts' },
					{ name: 'Javascript', value: 'js' },
				],
			},
			{
				type: 'input',
				name: 'author',
				message: 'Enter your name:',
			},
		]
		// remove first question if project name is already known
		if (projectName) {
			questions.shift()
		}

		const answers = await inquirer.prompt(questions)
		const data: CreateInterface = {
			project_name: answers.project_name ? answers.project_name : process.argv[3],
			lang: answers.lang,
			author: answers.author,
		}

		// copy skeleton to new project
		process.argv.includes('-i') ? (projectPath = process.cwd()) : (projectPath = path.join(process.cwd(), data.project_name))
		fs.copySync(path.join(__dirname, './skeletons/express-' + data.lang), projectPath)

		// edit package.json file
		const pkgJson = fs.readJsonSync(path.join(projectPath, 'package.json'))
		// const pkgJson = require(path.join(projectPath, 'package.json'))

		pkgJson.name = data.project_name
		pkgJson.author = data.author

		fs.writeFile(path.join(projectPath, 'package.json'), JSON.stringify(pkgJson, null, 2), err => {
			if (err) return global.logError(err.message)
		})

		console.log(colors.yellow('Project settings'))
		console.log(colors.yellow('------------------'))
		console.log(pad(colors.gray('Project name: '), 30), data.project_name)
		console.log(pad(colors.gray('Author: '), 30), data.author)
		console.log(pad(colors.gray('Language: '), 30), global.langToLanguage(String(data.lang)))

		return global.logSuccess(`Project ${data.project_name} created successfully!`)
	}
}
