var directions = 'L5, R1, R4, L5, L4, R3, R1, L1, R4, R5, L1, L3, R4, L2, L4, R2, L4, L1, R3, R1, R1, L1, R1, L5, R5, R2, L5, R2, R1, L2, L4, L4, R191, R2, R5, R1, L1, L2, R5, L2, L3, R4, L1, L1, R1, R50, L1, R1, R76, R5, R4, R2, L5, L3, L5, R2, R1, L1, R2, L3, R4, R2, L1, L1, R4, L1, L1, R185, R1, L5, L4, L5, L3, R2, R3, R1, L5, R1, L3, L2, L2, R5, L1, L1, L3, R1, R4, L2, L1, L1, L3, L4, R5, L2, R3, R5, R1, L4, R5, L3, R3, R3, R1, R1, R5, R2, L2, R5, L5, L4, R4, R3, R5, R1, L3, R1, L2, L2, R3, R4, L1, R4, L1, R4, R3, L1, L4, L1, L5, L2, R2, L1, R1, L5, L3, R4, L1, R5, L5, L5, L1, L3, R1, R5, L2, L4, L5, L1, L1, L2, R5, R5, L4, R3, L2, L1, L3, L4, L5, L5, L2, R4, R3, L5, R4, R2, R1, L5';



// turn the string into an array of values w/o commas or spaces in each element
directions = directions.split(' ').join('').split(',');

var currentLocation = {
  x: 0,
  y: 0
};

var locationsVisited = [[0,0]];
var duplicateLocations = [];

var currentlyFacing = 'North';

function turnLeft() {
  if (currentlyFacing === 'North') return currentlyFacing = 'West';
  if (currentlyFacing === 'East') return currentlyFacing = 'North';
  if (currentlyFacing === 'South') return currentlyFacing = 'East';
  if (currentlyFacing === 'West') return currentlyFacing = 'South';
}

function turnRight() {
  if (currentlyFacing === 'North') return currentlyFacing = 'East';
  if (currentlyFacing === 'East') return currentlyFacing = 'South';
  if (currentlyFacing === 'South') return currentlyFacing = 'West';
  if (currentlyFacing === 'West') return currentlyFacing = 'North';
}

function move(amount) {
  if (currentlyFacing === 'North') currentLocation.y += amount;
  if (currentlyFacing === 'South') currentLocation.y -= amount;
  if (currentlyFacing === 'East') currentLocation.x += amount;
  if (currentlyFacing === 'West') currentLocation.x -= amount;
}


function changeDirection(newDirection) {
  if (newDirection === 'L') return turnLeft();
  return turnRight();
}

function checkLocationsVisited() {
  var newCurrentLocation = locationsVisited[locationsVisited.length - 1];
  locationsVisited.forEach((location, index) => {
    if (index != (locationsVisited.length - 1)) {
      if (newCurrentLocation[0] === location[0] && newCurrentLocation[1] === location[1]) duplicateLocations.push(location);
    }
  });
}

function addNewLocations(paces){
  //start with current location
  var tempCurrentLocation = {
    x: currentLocation.x,
    y: currentLocation.y
  };

  for (var i = 0; i < paces; i++) {
    if (currentlyFacing === 'North') tempCurrentLocation.y++;
    if (currentlyFacing === 'South') tempCurrentLocation.y--;
    if (currentlyFacing === 'East') tempCurrentLocation.x++;
    if (currentlyFacing === 'West') tempCurrentLocation.x--;
    locationsVisited.push([tempCurrentLocation.x, tempCurrentLocation.y])
    checkLocationsVisited();
  }
}

directions.forEach((step) => {
  var turn = step.slice(0,1);
  var paces = parseInt(step.slice(1));
  changeDirection(turn);
  addNewLocations(paces);
  move(paces);
});

console.log(locationsVisited);

console.log('duplicates', duplicateLocations);
//For example, if your instructions are R8, R4, R4, R8, the first location you visit twice is 4 blocks away, due East.

var part1Answer =  Math.abs(currentLocation.x) + Math.abs(currentLocation.y);
console.log('You need to go a distance of:',part1Answer);
var part2Answer =  Math.abs(duplicateLocations[0][0]) + Math.abs(duplicateLocations[0][1]);
console.log('No, wait, on second thought, you actually need to go a distance of:', part2Answer);
