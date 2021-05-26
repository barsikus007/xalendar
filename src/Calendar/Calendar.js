import { useState } from 'react';
import Day from "./Day/Day";

export default function Calendar() {
  const [type, setType] = useState('week');
  // setType('week');
  if (type === 'week') {
    return (
      <div className="calendar">
        <div className="calendar-week">
          <Day />
        </div>
      </div>
    )
  }
}