import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Error fetching backend'))
  }, [])

  return (
    <div>
      <h1>Frontend (React)</h1>
      <p>Message from backend: {message}</p>
    </div>
  )
}

export default App
