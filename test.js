function schedule(events) {
  var schedule = [];

  function loop(remainingEvents){
    if(remainingEvents.length == 0){
      return schedule;
    }

    for(let i = 0; i<events.length; i++){
      if(!conflicts(schedule, remainingEvents[i])){
        schedule.push(remainingEvents[i]);
        var newRemainingEvents = remainingEvents.slice(0,i).concat(remainingEvents.slice(i+1));
        loop(newRemainingEvents);
      }
    }
  }


  function conflicts(events, event) {
    for (let i = 0; i < events.length; i++) {
      if (events[i][1] == event[1] || events[i][0] == event[0]) {
        return true;
      }
    }
    return false;
  }
}