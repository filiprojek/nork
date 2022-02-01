#!/usr/bin/env node
import Routes from './routes'

export class App {
	constructor() {
		Routes.router()
	}
}

new App()
