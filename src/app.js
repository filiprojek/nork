#!/usr/bin/env node
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs-extra')
const colors = require('colors')
const pad = require('pad')
    
const langToLanguage = lang => {
    switch (lang) {
        case 'js':
            return 'Javascript'
            break
        case 'ts':
            return 'Typescript'
            break
        default:
            return 'Unknown language'
    }
}

;(async () => {
	if (process.argv[2] == 'create') {
		// get info about new project
		const data = { lang: 'ts' }
		const questions = [
			{
				type: 'input',
				name: 'project_name',
				message: 'Enter project name:',
			},
			{
				type: 'list',
				message: "Pick the technology you're using:",
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
		if (process.argv[3]) {
			questions.shift()
		}

		let answers = await inquirer.prompt(questions)
		data.project_name = answers.project_name ? answers.project_name : process.argv[3]
		data.lang = answers.lang
		data.author = answers.author

		// copy skeleton to new project
		fs.copySync(path.join(__dirname, './skeletons/express-' + data.lang), process.cwd())

		// edit package.json file
		const pkgJson = require(path.join(process.cwd(), 'package.json'))

		pkgJson.name = data.project_name
		pkgJson.author = data.author

		fs.writeFile(path.join(process.cwd(), 'package.json'), JSON.stringify(pkgJson, null, 2), err => {
			if (err) return console.log(err)
		})

		console.log(colors.yellow('Project settings'))
		console.log(colors.yellow('------------------'))
		console.log(pad(colors.gray('Project name: '), 30), data.project_name)
		console.log(pad(colors.gray('Author: '), 30), data.author)
		console.log(pad(colors.gray('Language: '), 30), langToLanguage(data.lang))

        console.log(colors.cyan(`Project ${ data.project_name } created successfully!`))
		return true
	}

	if (process.argv[2] == 'make') {
		const component = process.argv[3]
	}
	if (!process.argv[2]) {
		// Help
		console.log('Help coming soon!')
	}
})()
