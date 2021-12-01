import pad from 'pad'
import colors from 'colors'

export default class Help {
	constructor() {
		// this.logHelp()
	}
	// log help & returns status in string for tests
	static makeHelp(): string {
		const spc = 27
		return `
Usage: make:[component]

${pad('  make controller [name]', spc)} create a new controller
${pad('  make middleware [name]', spc)} create a new middleware
${pad('  make model [name]', spc)} create a new model
${pad('  make route [name]', spc)} create a new route
${pad('  make test [name]', spc)} create a new test
${pad('  make view [name]', spc)} create a new view
        `
	}

	static allHelp(): string {
		const spc = 27

		return `
Usage: nork <command> [options]

Options:
${pad('  -v, --version', spc)} output the version number
${pad('  -h, --help', spc)} output usage information

Commands:
${pad('  create [app-name]', spc)} create a new project
${pad('  create [app-name] -i', spc)} create a new project in current directory
${pad('  make controller [name]', spc)} create a new controller
${pad('  make interface [name]', spc)} create a new interface
${pad('  make middleware [name]', spc)} create a new middleware
${pad('  make model [name]', spc)} create a new model
${pad('  make route [name]', spc)} create a new route
${pad('  make service [name]', spc)} create a new service
${pad('  make test [name]', spc)} create a new test
${pad('  make view [name]', spc)} create a new view
${pad('  setup', spc)} set up an existing project for nork

    Run ${colors.cyan('nork help <command>')} for detailed usage of given command.
        `
	}

	static specificHelp(specific: string): string {
		return `Usage: ${specific} [options]`
	}

	static logHelp = (specific: boolean | string = false): string => {
		if (specific) {
			// log specific help
			if (specific == 'make') {
				return this.makeHelp()
			}
			// else return specific help
			return this.specificHelp(String(specific))
		}
		// if nothing return help all
		return this.allHelp()
	}
}
