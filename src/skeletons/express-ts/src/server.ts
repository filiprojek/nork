import http from 'http'
import { app } from '@/app'
import config from '@/utils/environment'
import { Succ } from '@/services/globalService'
import database from '@/config/database'
const port: number = config.APP_PORT || 8080
const hostname: string = config.APP_HOSTNAME || 'localhost'
const server = http.createServer(app)

// Server
export function runServer(): void {
	server.listen(port, hostname, () => {
		new Succ(200, `Server is listening on http://localhost:${port}`)
	})
}

if (!config.NORK.db) {
	runServer()
} else {
	const db_connection = database()
	if (db_connection) {
		runServer()
	}
}
