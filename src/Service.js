export default class EventService {

  static getEvents(from, to) {
    // this.userId = 269788
    this.userId = 256720
    return `http://165.22.72.61/events?userId=${this.userId}&startDate=${from}&endDate=${to}`
  }
}