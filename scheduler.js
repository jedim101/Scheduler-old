function schedule(definiteEvents, eventsToSchedule){
  var allSchedules = [];
  var schedule = [];

  for(var i = 0; i<definiteEvents.length; i++){
    let otherDefinites = definiteEvents.slice(0,i).concat(definiteEvents.slice(i+1));
    if(!conflicts(otherDefinites, definiteEvents[i])){
      schedule.push(definiteEvents[i]);
    } else {
      return "Conflict between prioritized events";
    }
  }

  // console.log("Beginning backtrack");
  backtrack(eventsToSchedule, schedule);
  
  function backtrack(remaining, scheduled){
    // console.log("\nremaining:", remaining);
    // console.log("scheduled:", scheduled);
    // console.log("allSchedules:", allSchedules);
    if(remaining.length == 0){
      return;
    }

    for(var i = 0; i<remaining.length; i++){
      // console.log("Event in question:", remaining[i]);
      if(!conflicts(scheduled, remaining[i])){
        // console.log("[NO CONFLICT]");
        scheduled.push(remaining[i]);
        // console.log("[UPDATED] scheduled:", scheduled);
        var newRemaining = remaining.slice();
        newRemaining.splice(i,1);
        // console.log("newRemaining:", newRemaining);
        backtrack(newRemaining,scheduled);
        // console.log("[BACKTRACKED]\n");
        allSchedules.push(scheduled.slice());
        // console.log("[UPDATED] allSchedules:",allSchedules,"\n");
        scheduled.pop();
      } else {
        // console.log("[CONFLICT]");
      }
    }
  }

  function conflicts(events, event) {
    for (let i = 0; i < events.length; i++) {
      if (events[i][1] == event[1]) {
        return true;
      }
    }
    return false;
  }
  
  allSchedules.sort((a,b) => b.length - a.length);
  var maxLength = allSchedules[0].length;
  var bestSchedules = allSchedules.slice(0, maxLength);

  for(var i = 0; i < allSchedules.length; i++){
    if(allSchedules[i].length < maxLength){
      bestSchedules = allSchedules.slice(0,i);
      break;
    }
  }
  
  for(var i = 0; i < bestSchedules.length; i++){
    bestSchedules[i].sort((a,b) => a[1] - b[1]);
  }

  // for(var i = 0; i < bestSchedules.length; i++){
  //   var otherBests = bestSchedules.slice(0,i).concat(bestSchedules.slice(i+1));
  //   for(var j = 0; j < otherBests.length; j++){
  //     if(otherBests[j] == bestSchedules[i]){
  //       bestSchedules = otherBests.slice();
  //     }
  //   }
  // }

  return bestSchedules;
}


const definite = [
  ["Def A",1],
  ["Def B",4],
];

const possible = [
  ["Event A", 1],
  ["Event B", 2],
  ["Event C", 4],
  ["Event D", 5],
];

console.log("Output:\n",schedule(definite, possible));