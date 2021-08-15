const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const path = require('path')

const routes = require('./routes')
const middlewares = require('./middlewares')

const port = process.env.APP_PORT || 8080
const app = express()

// MongoDB
const dbURI = process.env.DB_URI
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
	.then(result => {
		console.log('connected to db')
		app.listen(port, () => {
			console.log(`server is running on http://localhost:${port}`)
		})
	})
	.catch(err => {
		console.log(err)
	})

// View engine
app.set('view engine', 'ejs')

// Middlewares
app.use(middlewares)
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use(routes)
