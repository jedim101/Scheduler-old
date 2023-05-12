function createSchedule(events) {
  var schedule = [];

  events.sort((a,b) => a.endTime - b.endTime);
  var end = 0;
  for (var i = 0; i < events.length; i++) {
    let event = events[i];
    if(event.startTime >= end) {
      schedule.push(event);
      end = event.endTime;
    }
  }
  return schedule;
}

const events = [
  {name: 'Event A', startTime: 10, endTime: 18},
  {name: 'Event B', startTime: 11, endTime: 12},
  {name: 'Event C', startTime: 13, endTime: 14},
  {name: 'Event D', startTime: 7, endTime: 11},
];

console.log(createSchedule(events));