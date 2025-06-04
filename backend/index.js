import express from 'express'
import cors from 'cors'
import parcels from './routes/parcels.js'

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api/parcels', parcels)

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`)
})
