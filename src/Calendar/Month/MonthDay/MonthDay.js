import {useState, useEffect} from "react";
import moment from "moment";
// require('moment/locale/ru');


export default function MonthDay(props) {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  const eventsByDate = {}
  const week = []
  return (<div>{props.start}{props.end}</div>)
//   for (const x of Array(7).keys()) {
//     const dat = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
//     eventsByDate[dat] = []
//     week.push(<Day key={dat} date={dat} events={eventsByDate[dat]} name={moment(props.start).add(x, 'days').format('dddd')} />)
//   }
//   if (error) {
//       console.error('ERROR TODO POP-IT')
//       return (
//         <div className="calendar-week">
//           <Timetable />
//           {week}
//         </div>
//       )
//   } else if (!isLoaded) {
//       return (
//         <div className="calendar-week">
//           <Timetable />
//           {week}
//         </div>
//       )
//   } else {
//     Array.from(items).forEach((event) => {
//       // if (event.message) {
//       //   return
//       // }
//       eventsByDate[event.date].push(event)
//     })
//     const week = []
//     for (const x of Array(7).keys()) {
//       const dat = moment(props.start).add(x, 'days').format('YYYY-MM-DD')
//       week.push(<Day key={dat}  date={dat} events={eventsByDate[dat]} name={moment(props.start).add(x, 'days').format('dddd')} />)
//     }
//     return (
//       <div className="calendar-week">
//         <Timetable />
//         {week}
//       </div>
//     )
//   }
}