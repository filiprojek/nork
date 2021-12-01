import { Schema, model } from 'mongoose'

const modelSchema = new Schema<any>(
	{
		title: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
)

export default model('ModelName', modelSchema)
