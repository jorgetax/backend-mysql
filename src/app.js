import express from 'express'
import routers from './router/index.js'

const app = express()

app.use(express.json())

/* dynamic route */
app.use(routers)

/* handle every request with this middleware */
app.use(async (req, res, next) => {
  res.setHours('Content-Type', 'text/plain')
  res.status(508).end('Loop Detected')
})

app.listen(5000, () => {
  console.log('Server is running on port 3000')
})