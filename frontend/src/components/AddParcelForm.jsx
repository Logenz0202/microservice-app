import { useState } from 'react'
import { addParcel } from '../api'

export default function AddParcelForm({ onAdd }) {
  const [tracking, setTracking] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!tracking) return
    try {
      await addParcel(tracking)
      onAdd(tracking)
      setTracking('')
      setError('')
    } catch {
      setError('Nie udało się dodać paczki')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={tracking}
        onChange={e => setTracking(e.target.value)}
        placeholder="Numer paczki"
      />
      <button type="submit">Dodaj paczkę</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}
