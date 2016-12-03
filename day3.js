var rawData = require('./day3data');
var processedData1 = [];
var processedData2 = [];

// process data for part 1 to be arrays of 3 numbers in ascending order
rawData.split('\n').forEach((line) => {
  var temp = [];
  line.split('  ').forEach((str) => {
    if (str) temp.push(Number(str));
  });

  //store unsorted data for part 2
  //stupid pass by reference! so gotta grab the values, not the array itself
  processedData2.push([temp[0], temp[1], temp[2]]);

  // such awesome manual bubble sort because chrome's sort method sots by utf char not number value so 10 would com before 7
  var smaller;
  if (temp[0] > temp[1]) {
    smaller = temp[1];
    temp[1] = temp[0];
    temp[0] = smaller;
  }
  if (temp[1] > temp[2]) {
    smaller = temp[2];
    temp[2] = temp[1];
    temp[1] = smaller;
  }
  if (temp[0] > temp[1]) {
    smaller = temp[1];
    temp[1] = temp[0];
    temp[0] = smaller;
  }
  processedData1.push(temp);

});
// processedData1 is now an array of arrays of 3 numbers each, in ascending order
var hits1 = [];
processedData1.forEach((arr) => {
  if (arr[2] < (arr[0] + arr[1])) hits1.push(arr);
});

var col1 = [];
var col2 = [];
var col3 = [];
processedData2.forEach((arr) => {
  col1.push(arr[0]);
  col2.push(arr[1]);
  col3.push(arr[2]);
});
var hits2 = [];

function checkTrianglesVertically(arr) {
  for (var i = 0; i < arr.length; i+=3) {
    // sort
    var temp = [arr[i], arr[i+1], arr[i+2]];
    var smaller;
    if (temp[0] > temp[1]) {
      smaller = temp[1];
      temp[1] = temp[0];
      temp[0] = smaller;
    }
    if (temp[1] > temp[2]) {
      smaller = temp[2];
      temp[2] = temp[1];
      temp[1] = smaller;
    }
    if (temp[0] > temp[1]) {
      smaller = temp[1];
      temp[1] = temp[0];
      temp[0] = smaller;
    }
    if (temp[2] < (temp[0] + temp[1])) hits2.push(temp);
  }
}

checkTrianglesVertically(col1);
checkTrianglesVertically(col2);
checkTrianglesVertically(col3);

console.log('for part 1, the number of triangles is:', hits1.length);
console.log('for part 2, the number of triangles is:', hits2.length);
