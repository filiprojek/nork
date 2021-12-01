import Help from './help'
import Version from './version'
import Setup from './setup'
import Make from './make'

export default class Routes {
	static router(): string {
		if (process.argv[2] == 'help' || process.argv[2] == '-h' || process.argv[2] == '--help') {
			if (process.argv[3]) {
				console.log(Help.logHelp(process.argv[3]))
				return 'specific help'
			}
			console.log(Help.logHelp())
			return 'all help'
		}

		if (process.argv[2] == '-v' || process.argv[2] == '--version') {
			console.log(Version.show())
			return 'version'
		}

		if (process.argv[2] == 'setup') {
			if (process.argv[3] != 'test') {
				Setup.setup()
			}
			return 'setup'
		}

		if (process.argv[2] == 'make') {
			if (process.argv[3]) {
				if (process.argv[4] != 'test') {
					Make.component(process.argv[3])
				}
				return `make ${process.argv[3]}`
			}
		}

		console.log(Help.logHelp())
		return 'all help'
	}
}
