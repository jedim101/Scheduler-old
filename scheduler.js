function blockSchedule(events) {
  events.sort((a, b) => a.length - b.length);
  const schedule = [];

  for(let i=0; i<events.length; i++) {
    var event = events[i];
    console.log("Event:", event[0]);
    
    for(let q=1; q < event.length; q++) {
      var timeSlot = event[q];
      console.log("timeSlot", timeSlot);
      if(!conflicts(schedule, timeSlot)) {
        let toAdd = [event[0], timeSlot];
        console.log("to add",toAdd);

        schedule.push(toAdd); 
        console.log("Added", [toAdd], "to schedule");
      }
    }
  }
  schedule.push("asdhkdhakhsdflksfdh");
  return schedule;
}

function conflicts(events, period){
  for(let i=0; i<events.length; i++) {
    if(events[i][1] = period) {
      console.log("Conflict between", events[i],"and", period);
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