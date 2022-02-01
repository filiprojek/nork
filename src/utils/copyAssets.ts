import * as shell from 'shelljs'

shell.cp('-R', 'src/skeletons', 'dist/')
shell.cp('-R', 'src/interfaces', 'dist/')
shell.cp('-R', 'src/make-files', 'dist/')

shell.chmod('+x', 'dist/app.js')
