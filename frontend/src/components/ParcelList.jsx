import { useEffect, useState } from 'react'
import { getParcel } from '../api'

export default function ParcelList({ trackingNumbers }) {
  const [parcels, setParcels] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      Promise.all(trackingNumbers.map(getParcel))
        .then(setParcels)
        .catch(console.error)
    }, 3000)
    return () => clearInterval(interval)
  }, [trackingNumbers])

  return (
    <ul>
      {parcels.map(p => (
        <li key={p.tracking_number}>
          <strong>{p.tracking_number}</strong> - {p.status}
        </li>
      ))}
    </ul>
  )
}
