import { assert } from 'chai'
import Help from '../help'
import pad from 'pad'

describe('should return help', () => {
	it('returns all help', () => {
		const help = Help.logHelp()
		const correct = Help.allHelp()
		assert.equal(help, correct)
	})

	it('returns make help', () => {
		const help = Help.logHelp('make')
		const correct = Help.makeHelp()
		assert.equal(help, correct)
	})

	it('returns specific help', () => {
		const help = Help.logHelp('setup')
		const correct = Help.specificHelp('setup')
		assert.equal(help, correct)
	})
})
