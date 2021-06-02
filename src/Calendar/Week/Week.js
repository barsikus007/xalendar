import Day from "../Day/Day";
import Timetable from "../Timetable/Timetable";
import {Component} from "react";

Date.prototype.yyyymmdd = function() {
  return this.toISOString().slice(0, 10)
}

export default class Week extends Component{
  constructor(props) {
    super(props)
    this.state = {
      start: props.start,
      end: props.end,
      error: null,
      isLoaded: false,
      items: [],
    }
  }
  componentDidUpdate() {
    // console.log(this.props)
    // console.log(this.state)
    if (!(this.props.start === this.state.start && this.props.end === this.state.end)) {
      this.setState({isLoaded: false})
      this.setState({start: this.props.start})
      this.setState({end: this.props.end})
    fetch(`https://xalendar.herokuapp.com/events?userId=256720&startDate=${this.props.start}&endDate=${this.props.end}`) //, {mode: 'no-cors'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
  }
  componentDidMount() {
    console.log('aboba')
    fetch(`https://xalendar.herokuapp.com/events?userId=256720&startDate=${this.props.start}&endDate=${this.props.end}`) //, {mode: 'no-cors'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()

  // props.events.forEach((event) => {
  //     console.log(event)
  // })

  render() {
    const { error, isLoaded, items } = this.state;
    let dateMon = new Date(this.props.start)
    let dateTue = new Date(this.props.start)
    dateTue.setDate(dateMon.getDate()+1)
    let dateWed = new Date(this.props.start)
    dateWed.setDate(dateMon.getDate()+2)
    let dateThu = new Date(this.props.start)
    dateThu.setDate(dateMon.getDate()+3)
    let dateFri = new Date(this.props.start)
    dateFri.setDate(dateMon.getDate()+4)
    let dateSat = new Date(this.props.start)
    dateSat.setDate(dateMon.getDate()+5)
    let dateSun = new Date(this.props.start)
    dateSun.setDate(dateMon.getDate()+6)
    if (error) {
      console.error('ERROR')
      return (
        <div className="calendar-week">
          <Timetable />
          <Day date={dateMon} events={[]} name="Monday" />
          <Day date={dateTue} events={[]} name="Tuesday" />
          <Day date={dateWed} events={[]} name="Wednesday" />
          <Day date={dateThu} events={[]} name="Thursday" />
          <Day date={dateFri} events={[]} name="Friday" />
          <Day date={dateSat} events={[]} name="Saturday" />
          <Day date={dateSun} events={[]} name="Sunday" />
        </div>
      )
    } else if (!isLoaded) {
      // this.setState({items: []})
      return (
        <div className="calendar-week">
          <Timetable />
          <Day date={dateMon} events={[]} name="Monday" />
          <Day date={dateTue} events={[]} name="Tuesday" />
          <Day date={dateWed} events={[]} name="Wednesday" />
          <Day date={dateThu} events={[]} name="Thursday" />
          <Day date={dateFri} events={[]} name="Friday" />
          <Day date={dateSat} events={[]} name="Saturday" />
          <Day date={dateSun} events={[]} name="Sunday" />
        </div>
      )
    } else {
      const eventsByDate = {
        [dateMon.yyyymmdd()]: [],
        [dateTue.yyyymmdd()]: [],
        [dateWed.yyyymmdd()]: [],
        [dateThu.yyyymmdd()]: [],
        [dateFri.yyyymmdd()]: [],
        [dateSat.yyyymmdd()]: [],
        [dateSun.yyyymmdd()]: [],
      }
      Array.from(items).forEach((event) => {
        if (event.message) {
          return;
        }
        eventsByDate[event.date].push(event)
      })
      // this.setState({items: []})
      return (
        <div className="calendar-week">
          <Timetable />
          <Day date={dateMon} events={eventsByDate[dateMon.yyyymmdd()]} name="Monday" />
          <Day date={dateTue} events={eventsByDate[dateTue.yyyymmdd()]} name="Tuesday" />
          <Day date={dateWed} events={eventsByDate[dateWed.yyyymmdd()]} name="Wednesday" />
          <Day date={dateThu} events={eventsByDate[dateThu.yyyymmdd()]} name="Thursday" />
          <Day date={dateFri} events={eventsByDate[dateFri.yyyymmdd()]} name="Friday" />
          <Day date={dateSat} events={eventsByDate[dateSat.yyyymmdd()]} name="Saturday" />
          <Day date={dateSun} events={eventsByDate[dateSun.yyyymmdd()]} name="Sunday" />
        </div>
      )
    }
  }
}
