import { useState } from 'react'
import AddParcelForm from './components/AddParcelForm'
import ParcelList from './components/ParcelList'

function App() {
  const [trackingNumbers, setTrackingNumbers] = useState([])

  const handleAdd = (number) => {
    setTrackingNumbers(prev => [...new Set([...prev, number])])
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Śledzenie Paczek</h1>
      <AddParcelForm onAdd={handleAdd} />
      <ParcelList trackingNumbers={trackingNumbers} />
    </div>
  )
}

export default App
