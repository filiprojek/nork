import colors from 'colors'

export default class Global {
	static logSuccess = (msg: boolean | string = false): string => {
		if (!msg) {
			msg = 'Success!'
		}
		console.log(colors.cyan(String(msg)))
		return String(msg)
	}

	static logError(errorMsg: string) {
		console.log(colors.bgYellow.red(errorMsg))
		return
	}

	static langToLanguage(lang: string): string {
		switch (lang) {
			case 'js':
				return 'Javascript'
			case 'ts':
				return 'Typescript'
			default:
				return 'Unknown language'
		}
	}

	static dbToDatabase(lang: string): string {
		switch (lang) {
			case 'mongodb':
				return 'MongoDB'
			case 'postgresql':
				return 'PostgreSQL'
			case 'mysql':
				return 'MySQL'
			default:
				return 'Unknown database'
		}
	}
}
