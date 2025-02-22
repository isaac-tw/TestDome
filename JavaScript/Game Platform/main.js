// https://www.testdome.com/questions/javascript/game-platform/116858

function calculateFinalSpeed(initialSpeed, inclinations) {
  return Math.max(0, inclinations.reduce((speed, incline) => speed - incline, initialSpeed));
}

/* To meet the requirement that "The function should immediately return 0
as the final speed if an incline reduces the speed to 0 or below" */
// function calculateFinalSpeed(initialSpeed, inclinations) {
//   let speed = initialSpeed;

//   for (let incline of inclinations) {
//     speed -= incline;
//     if (speed <= 0) return 0;
//   }

//   return speed;
// }

console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));
