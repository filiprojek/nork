import { assert } from 'chai'
import Setup from '../setup'
import Global from '../global'

describe('should setup project', () => {
	it('setup project', async () => {
		const correct: string = Global.logSuccess()
		const setup = await Setup.setup(true)
		assert.equal(setup, correct)
	})
})
