const express = require('express')
// const exphbs = require('express-handlebars');
// const mysql = require('mysql');
const app = express()
const tasks = require('./routes/tasks')
 
// middleware
app.use(express.json())

// routes
app.use('/api/v1/tasks',tasks)

// port
const port = 3000

// app.listen fun
app.listen(port, () => console.log(`Listening on port ${port}`))