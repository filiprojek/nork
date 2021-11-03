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
		case 'ts':
			return 'Typescript'
		default:
			return 'Unknown language'
	}
}

const logError = errorMsg => {
	console.log(colors.bgYellow.red(errorMsg))
	return
}

const logSuccess = (msg = false) => {
	if (!msg) {
		msg = 'Success!'
	}
	console.log(colors.cyan(msg))
	return
}

const logHelp = (specific = false, command = false) => {
	let spc = 27

	if (specific) {
		// log specific help
		if (specific == 'make') {
			console.log(`Usage: ${specific}:[component]`)
			console.log()
			console.log(pad('  make controller [name]', spc), 'create a new controller')
			console.log(pad('  make middleware [name]', spc), 'create a new middleware')
			console.log(pad('  make model [name]', spc), 'create a new model')
			console.log(pad('  make route [name]', spc), 'create a new route')
			console.log(pad('  make test [name]', spc), 'create a new test')
			console.log(pad('  make view [name]', spc), 'create a new view')
			return
		}
		console.log(`Usage: ${specific} [options]`)
		return
	}

	console.log('Usage: nork <command> [options]')
	console.log()
	console.log('Options:')
	console.log(pad('  -v, --version', spc), 'output the version number')
	console.log(pad('  -h, --help', spc), 'output usage information')
	console.log()
	console.log('Commands:')
	console.log(pad('  create [app-name]', spc), 'create a new project')
	console.log(pad('  create [app-name] -i', spc), 'create a new project in current directory')
	console.log(pad('  make controller [name]', spc), 'create a new controller')
	console.log(pad('  make interface [name]', spc), 'create a new interface')
	console.log(pad('  make middleware [name]', spc), 'create a new middleware')
	console.log(pad('  make model [name]', spc), 'create a new model')
	console.log(pad('  make route [name]', spc), 'create a new route')
	console.log(pad('  make service [name]', spc), 'create a new service')
	console.log(pad('  make test [name]', spc), 'create a new test')
	console.log(pad('  make view [name]', spc), 'create a new view')
	console.log(pad('  setup', spc), 'set up an existing project for nork')
	console.log()
	console.log('  Run', colors.cyan('nork help <command>'), 'for detailed usage of given command.')

	if (command) {
		console.log(colors.red('Unknown command'), colors.bold.blue(command))
	}

	return
}

;(async () => {
	if (process.argv[2] == 'create') {
		// get info about new project
		let projectPath
		const data = {}
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
		process.argv.includes('-i') ? (projectPath = process.cwd()) : (projectPath = path.join(process.cwd(), data.project_name))
		fs.copySync(path.join(__dirname, './skeletons/express-' + data.lang), projectPath)

		// edit package.json file
		const pkgJson = require(path.join(projectPath, 'package.json'))

		pkgJson.name = data.project_name
		pkgJson.author = data.author

		fs.writeFile(path.join(projectPath, 'package.json'), JSON.stringify(pkgJson, null, 2), err => {
			if (err) return logError(err)
		})

		console.log(colors.yellow('Project settings'))
		console.log(colors.yellow('------------------'))
		console.log(pad(colors.gray('Project name: '), 30), data.project_name)
		console.log(pad(colors.gray('Author: '), 30), data.author)
		console.log(pad(colors.gray('Language: '), 30), langToLanguage(data.lang))

		return logSuccess(`Project ${data.project_name} created successfully!`)
	}

	if (process.argv[2] == 'make') {
		if (!process.argv[3] || !process.argv[4]) return logHelp('make')

		const component = process.argv[3]
		const norkcfg = require(path.join(process.cwd(), 'norkconfig.json'))

		let tsComponents = ['controller', 'middleware', 'route', 'service']

		if (tsComponents.includes(component)) {
			let src = path.join(__dirname, './make-files/express-' + norkcfg.lang + '/' + component + '.' + norkcfg.lang)
			let dest = path.join(process.cwd(), './src/' + component + 's' + '/' + process.argv[4] + '.' + norkcfg.lang)

			try {
				fs.copySync(src, dest, { overwrite: false, errorOnExist: true })
			} catch (err) {
				return logError(err.message)
			}
			return logSuccess()
		}

		if (component == 'model') {
			let src = path.join(__dirname, './make-files/express-' + norkcfg.lang + '/' + component + '.js')
			let dest = path.join(process.cwd(), './src/' + component + 's' + '/' + process.argv[4] + '.js')

			try {
				fs.copySync(src, dest, { overwrite: false, errorOnExist: true })
			} catch (err) {
				return logError(err.message)
			}
			return logSuccess()
		}

		if (component == 'view') {
			let src = path.join(__dirname, './make-files/express-' + norkcfg.lang + '/' + component + '.ejs')
			let dest = path.join(process.cwd(), './src/' + component + 's' + '/' + process.argv[4] + '.ejs')

			try {
				fs.copySync(src, dest, { overwrite: false, errorOnExist: true })
			} catch (err) {
				return logError(err.message)
			}
			return logSuccess()
		}

		if (component == 'test') {
			let src = path.join(__dirname, './make-files/express-' + norkcfg.lang + '/' + component + '.js')
			let dest = path.join(process.cwd(), './src/' + component + 's' + '/' + process.argv[4] + '.test.js')

			try {
				fs.copySync(src, dest, { overwrite: false, errorOnExist: true })
			} catch (err) {
				return logError(err.message)
			}
			return logSuccess()
		}
		if (component == 'interface') {
			let src = path.join(__dirname, './make-files/express-' + norkcfg.lang + '/' + component + '.ts')
			let dest = path.join(process.cwd(), './src/' + component + 's' + '/' + process.argv[4] + '.ts')

			try {
				fs.copySync(src, dest, { overwrite: false, errorOnExist: true })
			} catch (err) {
				return logError(err.message)
			}
			return logSuccess()
		}
	}

	if (process.argv[2] == 'setup') {
		const questions = {
			type: 'list',
			message: "Pick the technology you're using:",
			name: 'lang',
			choices: [
				{ name: 'Typescript', value: 'ts' },
				{ name: 'Javascript', value: 'js' },
			],
		}
		let answers = await inquirer.prompt(questions)

		fs.writeJsonSync(path.join(process.cwd(), './norkconfig.json'), answers)
		return logSuccess()
	}

	if (process.argv[2] == '-v' || process.argv[2] == '--version') {
		const pkgJson = require(path.join(__dirname, '../package.json'))
		return console.log('nork', pkgJson.version)
	}

	if (process.argv[2] == 'help' || process.argv[2] == '-h' || process.argv[2] == '--help') {
		if (process.argv[3]) {
			return logHelp(process.argv[3])
		}
		return logHelp()
	}

	process.argv.splice(0, 2)
	logHelp(false, process.argv.join(' '))
})()
