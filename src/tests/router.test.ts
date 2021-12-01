import { assert } from 'chai'
import Routes from '../routes'

describe('should return help', () => {
	process.argv = []
	it('return all help', () => {
		const options = ['-h', '--help']
		for (let i = 0; i < options.length; i++) {
			process.argv[2] = options[i]
			process.argv[3] = ''
			const routes = Routes.router()
			assert.equal(routes, 'all help')
		}
	})

	it('return specific help', () => {
		const options = ['-h', '--help']
		for (let i = 0; i < options.length; i++) {
			process.argv[2] = options[i]
			process.argv[3] = 'make'
			const routes = Routes.router()
			assert.equal(routes, 'specific help')
		}
	})
})

describe('should return version', () => {
	it('return version', () => {
		const options = ['-v', '--version']
		for (let i = 0; i < options.length; i++) {
			process.argv[2] = options[i]
			const routes = Routes.router()
			assert.equal(routes, 'version')
		}
	})
})

describe('should return setup', () => {
	it('return setup', () => {
		process.argv[2] = 'setup'
		process.argv[3] = 'test'
		const routes = Routes.router()
		assert.equal(routes, 'setup')
	})
})

describe('should return make', () => {
	const options = ['controller', 'middleware', 'route', 'service', 'model', 'view', 'test', 'interface']
	for (let i = 0; i < options.length; i++) {
		it(`return make ${options[i]}`, () => {
			process.argv[2] = 'make'
			process.argv[3] = options[i]
			process.argv[4] = 'test'
			const routes = Routes.router()
			assert.equal(routes, `make ${options[i]}`)
		})
	}
})
