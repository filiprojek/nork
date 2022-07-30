export interface Questions {
	type: string
	message: string
	name: string
	choices: [
		{
			name: string
			value: string
		},
		{
			name: string
			value: string
		}
	]
}
