interface database {
	db: string
	orm: string
}

export interface Create {
	project_name: string
	author: string
	lang: string
	database: database
	email: string
	website: string
}
