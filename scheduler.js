function blockSchedule(events) {
  events.sort((a, b) => a.length - b.length);
  var allSchedules = [];
  var schedule = [];

  for(let i=0; i<events.length; i++) {
    var event = events[i];
    
    for(let q=1; q < event.length; q++) {
      var timeSlot = event[q];
      if(!conflicts(schedule, timeSlot)) {

        schedule.push([event[0], timeSlot]);
        // break;
      }
    }
  }
  schedule.sort((a, b) => a[1] - b[1]);
  return allSchedules;
}

function conflicts(events, period){
  for(let i=0; i<events.length; i++) {
    if(events[i][1] == period) {
      return true;
    }
  }
  return false;
}

const eventsToSchedule = [
  ["Event A", 1, 2, 5],
  ["Event B", 2, 4],
  ["Event C", 5],
  ["Event D", 3, 4, 7, 9],
]

console.log(blockSchedule(eventsToSchedule));