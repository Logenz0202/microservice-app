import express from 'express'
import cors from 'cors'

const app = express()
const port = 5000

app.use(cors())

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' })
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend listening on port ${port}`)
})
