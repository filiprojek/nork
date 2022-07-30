const mongoose = require('mongoose')
const Schema = mongoose.Schema

const modelSchema = new Schema(
	{
		title: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
)

const ModelName = mongoose.model('ModelName', modelSchema)
module.exports = ModelName
