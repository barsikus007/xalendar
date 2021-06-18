export class EventService {
  static getEvents(from, to) {
    let userId = localStorage.getItem('userId')
    // console.log(userId)
    if (userId === null) userId = 256720
    return `http://165.22.72.61/events?userId=${userId}&startDate=${from}&endDate=${to}`
  }

  static async getAndSetUserId(name) {
    try {
      const response = await fetch(`http://165.22.72.61/user/${name}`)
      const data = await response.json()
      localStorage.setItem('userId', data.userid)
    } catch (e) {
      console.log('error')
      console.log(e)
      console.log(e.name)
      localStorage.setItem('userId', 256720)
    }
  }
}