const express = require('express')
const app = express()

const studentRouter = require('./routes/students')

const PORT = 3000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('student db example')
})

app.use('/students', studentRouter)

app.listen(PORT)

module.exports = app