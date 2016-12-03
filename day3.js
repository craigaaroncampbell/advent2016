var rawData = require('./day3data');
var processedData1 = [];
var processedData2 = [];
// process data for part 1 to be arrays of 3 numbers in ascending order
rawData.split('\n').forEach((line) => {
  var temp = [];
  line.split('  ').forEach((str) => {
    if (str) temp.push(Number(str));
  });

  // such awesome manual bubble sort because chrome's sort method sots by utf char not number value so 10 would com before 7
  var dummy;
  if (temp[0] > temp[1]) {
    dummy = temp[1];
    temp[1] = temp[0];
    temp[0] = dummy;
  }
  if (temp[1] > temp[2]) {
    dummy = temp[2];
    temp[2] = temp[1];
    temp[1] = dummy;
  }
  if (temp[0] > temp[1]) {
    dummy = temp[1];
    temp[1] = temp[0];
    temp[0] = dummy;
  }
  processedData1.push(temp);
});

// processedData1 is now an array of arrays of 3 numbers each, in ascending order
var hits = [];
processedData1.forEach((arr) => {
  if (arr[2] < (arr[0] + arr[1])) hits.push(arr);
});

console.log('for part 1, the number of triangles is:', hits.length);
