const { exec } = require('child_process')

let args = []

for (let i = 0; i < process.argv; i++) {
	if (i > 1) {
		console.log('i', i)
		console.log(process.args[i])
		args.push(process.args[i])
	}
}

console.log(args)

// exec('node ./framework/src/app.js', (error, stdout, stderr) => {
// 	if (error) {
// 		console.log(`error: ${error.message}`)
// 		return
// 	}
// 	if (stderr) {
// 		console.log(`stderr: ${stderr}`)
// 		return
// 	}
// 	console.log(`stdout: ${stdout}`)
// })
