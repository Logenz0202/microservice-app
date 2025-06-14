import express from 'express'
import cors from 'cors'
import parcels from './routes/parcels.js'
import healthcheck from './routes/healthcheck.js'

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api/parcels', parcels)
app.use('/api/health', healthcheck)

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`)
})
