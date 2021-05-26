import { useState } from 'react'

export default function Day() {
  const [type, setType] = useState('week');
  // setType('week')
  if (type === 'week') {
    return (
      <div className="day">
        day
      </div>
    )
  }
}