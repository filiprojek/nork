//import program from 'commander'
//import leven from 'leven'
import inquirer from 'inquirer'
import colors from 'colors'
import pad from 'pad'

export function createProject(project_name)
{
	const data = {
		project_name: 'new_project',
		author: '',
		lang: '',
	}

	const questions = [
		{
			type: 'list',
			name: 'lang',
			message: 'Choose what you prefer',
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

	data.project_name = project_name

	inquirer.prompt(questions).then(function (answers) {
		data.lang = answers.lang
		data.author = answers.author

		console.log(colors.yellow('Project settings'))
		console.log(colors.yellow('------------------'))
		console.log(pad(colors.gray('Project name: '), 30), data.project_name)
		console.log(pad(colors.gray('Author: '), 30), data.author)
		console.log(
			pad(colors.gray('Language: '), 30),
			langToLanguage(data.lang),
		)
	})
}
