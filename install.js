#!/usr/bin/node
import fs from 'fs'
import path from 'path'

/**
 * This will only works if the project folder is in the parent folder
 * This is not global fs solution!
 */

fs.copyFile('./framework/artisan.js', './artisan.js', err => {
	if (err) {
		console.log(err)
		console.log(path.resolve(path.dirname('')))
	}
	if (!err) {
		console.log('\x1b[32m%s\x1b[0m', 'Framework installed successfully!')
	}
})
