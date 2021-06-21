export class Service {
  static getEvents(from, to) {
    let userId = localStorage.getItem('userId')
    // if (userId === null) alert('Auth required')
    if (userId === null) userId = 256720
    return `http://165.22.72.61/student/events?userId=${userId}&startDate=${from}&endDate=${to}`
  }

  static getTeacherEvents(teacherId, from, to) {
    return `http://165.22.72.61/teacher/events?userId=${teacherId}&startDate=${from}&endDate=${to}`
  }

  static getModuleEvents(moduleId, from, to) {
    return `http://165.22.72.61/module/events?userId=${moduleId}&startDate=${from}&endDate=${to}`
  }

  static async getAllViews() {
    // const responseStudents = await fetch(`http://165.22.72.61/students`)
    // const dataStudents = await responseStudents.json()
    const responseTeachers = await fetch(`http://165.22.72.61/teachers`)
    const dataTeachers = await responseTeachers.json()
    // const responseModules = await fetch(`http://165.22.72.61/modules`)
    // const dataModules = await responseModules.json()
    return {
      // students: dataStudents,
      teachers: dataTeachers,
      // modules: dataModules,
    }
  }

  static async createEvent(eventObj) {
    const response = await fetch(`http://165.22.72.61/event`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventObj)
    })
    return await response.json()
  }

  static async editEvent(eventId, eventObj) {
    const response = await fetch(`http://165.22.72.61/event/${eventId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventObj)
    })
    return await response.json()
  }

  static async deleteEvent(eventId) {
    const response = await fetch(`http://165.22.72.61/event/${eventId}`, {
      method: 'DELETE',
    })
    return await response.json()
  }

  static async getAndSetUserId(name) {
    const response = await fetch(`http://165.22.72.61/user/${name}`)
    const data = await response.json()
    localStorage.setItem('userId', data.userid)
    localStorage.setItem('userName', name)
  }
}