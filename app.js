require('dotenv').config()

const express = require('express')
const app = express()

const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

const port = process.env.port || 5000

app.use(express.json())
app.use('/api/v1/tasks', tasks)

const startServer = async () => {
  try{
    await connectDB().then(() => console.log("Connected to DB"))
    app.listen(port, () => {
      console.log(`app is running on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

startServer()