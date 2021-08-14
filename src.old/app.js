#!/usr/bin/env node

import program from 'commander'
import leven from 'leven'
//import inquirer from 'inquirer'
import colors from 'colors'
//import pad from 'pad'

import { createProject } from './createProject.js'
import { make } from './make.js'

program.usage('<command> [options]')

program
	.command('create <app-name>')
	.description('create a new project')
	.action(app_name => {
		createProject(app_name)
	})

program
	.command('make <component>')
	.description('create components like controller, model ...')
	.action(component => {
		make(component)
	})

// output help information on unknown commands
program.on('command:*', ([cmd]) => {
	program.outputHelp()
	console.log(`  ` + colors.red(`Unknown command ${colors.yellow(cmd)}.`))
	console.log()
	suggestCommands(cmd)
	process.exitCode = 1
})
program.commands.forEach(c => c.on('--help', () => console.log()))

program.parse(process.argv)

function suggestCommands(unknownCommand) {
	const availableCommands = program.commands.map(cmd => cmd._name)

	let suggestion

	availableCommands.forEach(cmd => {
		const isBestMatch =
			leven(cmd, unknownCommand) < leven(suggestion || '', unknownCommand)
		if (leven(cmd, unknownCommand) < 3 && isBestMatch) {
			suggestion = cmd
		}
	})

	if (suggestion) {
		console.log(
			`  ` + colors.red(`Did you mean ${colors.yellow(suggestion)}?`),
		)
	}
}
