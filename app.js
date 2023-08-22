const express = require('express')
const app = express()

const tasks = require('./routes/tasks')

const port = process.env.port || 5000

app.use(express.json())
app.use('/api/v1/tasks', tasks)

app.listen(port, () =>{
  console.log(`app is running on port ${port}...`)
})