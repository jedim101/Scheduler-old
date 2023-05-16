// function schedule(eventsToSchedule) {
//   var allSchedules = [];
//   backtrack([], eventsToSchedule, allSchedules, -1);
//   allSchedules.sort((a, b) => b.length - a.length);
//   let maxLength = allSchedules[0].length;

//   for(var i = 0; i < allSchedules.length; i++) {
//     if (allSchedules[i].length !== maxLength) {
//       var bestSchedules = allSchedules.slice(0, i);
//       return bestSchedules;
//     }
//   }


//   function backtrack(selected, remaining) {
//     if (remaining.length == 0) {
//       allSchedules.push(selected);
//       return;
//     }
  
//     for (var i = 0; i < remaining.length; i++) {
//       var event = remaining[i];
  
//       if (!conflicts(selected, event)) {
//         var newSelected = selected.concat([event]);
//         var newRemaining = remaining.slice(i+1);
//         backtrack(newSelected, newRemaining);
//       }
//     }
//   }


//   function backtrack(selected, remaining) {
//     if (remaining.length == 0) {
//       allSchedules.push(selected);
//       return;
//     }
  
//     for (var i = 0; i < remaining.length; i++) {
//       for (var j = i; j < remaining.length; j++) {
//         var events = remaining.slice(i, j + 1);
//         if (!conflicts(selected, events)) {
//           var newSelected = selected.concat(events);
//           var newRemaining = remaining.slice(0, i).concat(remaining.slice(j + 1));
//           backtrack(newSelected, newRemaining);
//         }
//       }
//     }
//   }
  

//   function conflicts(events, event) {
//     for (let i = 0; i < events.length; i++) {
//       if (events[i][1] == event[1] || events[i][0] == event[0]) {
//         return true;
//       }
//     }
//     return false;
//   }
  
// }

function schedule(eventsToSchedule){
  var allSchedules = [];
  var schedule = [];
  backtrack(eventsToSchedule, schedule);
  
  function backtrack(remaining, currentSchedule){
    if(remaining.length == 0){
      allSchedules.push(result.slice());
      return;
    }

    for(var i = 0; i<remaining.length; i++){
      currentSchedule.push(remaining[i]);
      var newRemaining = remaining.slice();
      newRemaining.splice(i,1);
      
      backtrack(newRemaining, currentSchedule);
      currentSchedule.pop();
    }
  }

  return allSchedules;
}

const input = [
  ["Event A", 1],
  ["Event A", 2],
  ["Event A", 3],
  ["Event B", 4],
  ["Event B", 5],
  ["Event C", 6],
  ["Event D", 7],
  ["Event D", 8],
  ["Event D", 9],
  ["Event D", 10],
];

console.log(schedule(input));