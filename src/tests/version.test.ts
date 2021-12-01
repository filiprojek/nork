import { assert } from 'chai'
import Version from '../version'
import path from 'path'

describe('should return version', () => {
	it('return version', () => {
		const pkgJson = require(path.join(__dirname, '../../package'))
		const actualVersion = pkgJson.version
		assert.equal(Version.show(), `nork ${actualVersion}`)
	})
})
