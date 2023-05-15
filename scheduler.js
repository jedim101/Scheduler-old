function blockSchedule(events) {
  events.sort((a, b) => a.length - b.length);
  var schedule = [];

  for (var i = 0; i < events.length; i++) {
    var event = events[i];

    for (var q = 1; q < event.length; q++) {
      var timeSlot = event[q];
      if (!conflicts(schedule, timeSlot)) {

        schedule.push([event[0], timeSlot]);
        // break;
      }
    }
  }
  schedule.sort((a, b) => a[1] - b[1]);
  return schedule;
}



function backtrack(selected, remaining) {
  if(remaining.length == 0) {
    return selected;
  }

  var allSchedules = [];
  
  for (var i = 0; i < remaining.length; i++) {
    var event = remaining[i];

    for (var q = 1; q < event.length; q++) {
      var timeSlot = event[q];
      if (!conflicts(selected, timeSlot)) {
        selected.push([event[0],timeSlot]);
        remaining = remaining.slice(i+1);
        allSchedules.push(backtrack(selected,remaining));
      }
    }
  }
    
  return allSchedules;
}


function conflicts(events, period) {
  for (let i = 0; i < events.length; i++) {
    if (events[i][1] == period) {
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
];

console.log("blockSchedule:\n", blockSchedule(eventsToSchedule));
console.log("\nbacktrack:\n",backtrack([], eventsToSchedule));