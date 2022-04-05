const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
require('dotenv').config()

app.set('view engine', 'pug')
// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks',tasks)

// port
const port = process.env.PORT || 3000

const start = async() => {
     try {
         await connectDb(process.env.MONG_URL )
         app.listen(port, () => console.log(`Listening on port ${port}`))
     } catch (error) {
         console.log(error)
     }
}

start()