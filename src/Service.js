export default class EventService {

  static getEvents(from, to) {
    this.userId = 256720
    return fetch(`https://xalendar.herokuapp.com/events?userId=${this.userId}&startDate=${from}&endDate=${to}`)
      // .then((response) => {
      //   return response.json();
      // })
      // .then((data) => {
      //   return data;
      // })
  }

  static test(from, to) {
    this.userId = 256720
    return fetch(`https://jsonplaceholder.typicode.com/posts/1`)
  }
}