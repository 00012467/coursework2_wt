

const express = require('express')
// const exphbs = require('express-handlebars');
// const mysql = require('mysql');
const app = express()
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
require('dotenv').config()
// middleware

app.use(express.json())

// routes
app.use('/api/v1/tasks',tasks)

// port
const port = 3000

const start = async() => {
     try {
         await connectDb(process.env.MONG_URL )
         app.listen(port, () => console.log(`Listening on port ${port}`))
     } catch (error) {
         
     }
}

start()