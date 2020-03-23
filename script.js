//1. create pomodoro calculator 
///which input num of hour and show pomodoro session needed

//2. one session equal to 25 mins
const eachSession = 25;
//3. after finish each 1-3 session then 5 mins break
const shortBreak = 5;
//4. when finish loop (finish session 4 ) then 15 min break
const longBreak = 15;

//onecycle = (25*3 + (5*3)) + (25 + 15)
//Show 
//1.num of cycle
//2.num of pomo (1 pomo = 25+5)
//3.num of break (short and long)
//4. if start  ... will be finishing .... (in put .... hrs)


const userInput = 10;


const calculatePomoCycle = eachSession*4 + shortBreak*3 + longBreak

const calNumOfaActualTime = (hour) =>{
  let userInputInMin = hour*60
  let numOfCycle = Math.floor(userInputInMin/130)
  return numOfCycle
  }


console.log(calNumOfaActualTime(userInput))


