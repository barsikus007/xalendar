import './Calendar.css';
import Day from "./Day/Day";
import Week from "./Week/Week";
import Month from "./Month/Month";
import Pagination from "./Pagination/Pagination";
import CalendarHeader from "./CalendarHeader/CalendarHeader";

export default function Calendar() {
  // const [type, setType] = useState('week');
  const props = {
    type: 'week'
  }
  // setType('week');
  if (props.type === 'week') {
    return (
      <div className="calendar">
        <Pagination />
        <CalendarHeader />
        <Week />
      </div>
    )
  } else if (props.type === 'month') {
    return (
      <div className="calendar">
        <Month />
      </div>
    )
  } else if (props.type === 'day') {
    return (
      <div className="calendar">
        <Day />
      </div>
    )
  }
}