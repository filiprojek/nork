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
				message: 'Enter project name:'
			},
			{
				type: 'list',
				message: `Pick the technology you're using:`,
				name: 'lang',
				choices: [
					{ name: 'Typescript', value: 'ts' },
					{ name: 'Javascript - DEPRECATED', value: 'js' }
				]
			},
			{
				type: 'list',
				message: `Pick the database & ORM you're using:`,
				name: 'db',
				choices: [
					{ name: 'MongoDB - Mongoose', value: { db: 'mongodb', orm: 'mongoose' } },
					{ name: 'MySQL - Sequelize', value: { db: 'mysql', orm: 'sequelize' } },
					{ name: 'PostgreSQL - Sequelize', value: { db: 'postgresql', orm: 'sequelize' } }
				]
			},
			{
				type: 'input',
				name: 'author',
				message: 'Enter your name:'
			},
			{
				type: 'input',
				name: 'email',
				message: 'Enter your email:'
			},
			{
				type: 'input',
				name: 'website',
				message: 'Enter your website:'
			}
		]
		// remove first question if project name is already known
		if (projectName) questions.shift()

		const answers = await inquirer.prompt(questions)
		const data: CreateInterface = {
			project_name: answers.project_name ? answers.project_name : process.argv[3],
			lang: answers.lang,
			author: answers.author,
			database: answers.db,
			website: answers.website,
			email: answers.email
		}

		// copy skeleton to new project
		process.argv.includes('-i') ? (projectPath = process.cwd()) : (projectPath = path.join(process.cwd(), data.project_name))
		fs.copySync(path.join(__dirname, './skeletons/express-' + data.lang), projectPath)

		// copy default db models to new project
		if (data.database.orm == 'mongoose') fs.copySync(path.join(__dirname, './skeletons/mongoose-models/'), projectPath + '/src/models')
		if (data.database.orm == 'sequelize') fs.copySync(path.join(__dirname, './skeletons/sequelize-models/'), projectPath + '/src/models')

		// edit package.json file
		const pkgJson = fs.readJsonSync(path.join(projectPath, 'package.json'))
		pkgJson.name = data.project_name
		pkgJson.author = `${data.author} <${data.email}> (${data.website})`
		fs.writeFile(path.join(projectPath, 'package.json'), JSON.stringify(pkgJson, null, 2), (err) => {
			if (err) return global.logError(err.message)
		})

		// create norkconfig.json
		const norkconfig: any = { ...data }
		norkconfig['version'] = require('../package.json').version
		fs.writeFileSync(path.join(projectPath, 'norkconfig.json'), JSON.stringify(norkconfig, null, 2))

		console.log(colors.yellow('Project settings'))
		console.log(colors.yellow('------------------'))
		console.log(pad(colors.gray('Project name: '), 30), data.project_name)
		console.log(pad(colors.gray('Author: '), 30), pkgJson.author)
		console.log(pad(colors.gray('Language: '), 30), global.langToLanguage(String(data.lang)))
		console.log(pad(colors.gray('Database: '), 30), global.dbToDatabase(String(data.database.db)))

		return global.logSuccess(`Project ${data.project_name} created successfully!`)
	}
}
