import colors from 'colors'
import { ErrType } from '@/interfaces/globalInterface'

export class Err implements ErrType {
	code: number
	message: string

	constructor(code: number, message: string) {
		this.code = code
		this.message = message
		this.drop()
	}

	drop() {
		console.log(colors.bgRed(`${this.code}`) + colors.bgBlack.red(` ${this.message}`))
		return {
			code: this.code,
			message: this.message,
		}
	}
}

export class Succ {
	code: number
	message: string

	constructor(code: number, message: string) {
		this.code = code
		this.message = message
		this.drop()
	}

	drop() {
		console.log(colors.bgGreen.black(`${this.code}`) + colors.green.bgBlack(` ${this.message}`))
		return {
			code: this.code,
			message: this.message,
		}
	}
}
