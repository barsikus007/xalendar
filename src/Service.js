export default class EventService {

  static getEvents(from, to) {
    this.userId = 256720
    fetch(`https://cors-anywhere.herokuapp.com/https://xalendar.herokuapp.com/events?userId=${this.userId}&startDate=${from}&endDate=${to}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
  }
}