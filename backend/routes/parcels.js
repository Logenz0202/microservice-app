import express from 'express'
import db from '../db.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const { tracking_number } = req.body
  try {
    await db.query('INSERT INTO parcels (tracking_number) VALUES ($1)', [tracking_number])
    res.status(201).json({ message: 'Parcel added' })
  } catch (err) {
    if (err.code === '23505') {
      res.status(409).json({ error: 'Tracking number already exists' })
    } else {
      res.status(500).json({ error: 'DB insert error' })
    }
  }
})

router.get('/:tracking_number', async (req, res) => {
  const { tracking_number } = req.params
  try {
    const result = await db.query('SELECT * FROM parcels WHERE tracking_number = $1', [tracking_number])
    if (result.rows.length > 0) {
      res.json(result.rows[0])
    } else {
      res.status(404).json({ error: 'Not found' })
    }
  } catch (err) {
    res.status(500).json({ error: 'DB read error' })
  }
})

export default router
