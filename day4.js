// const allData = require('./day4data').split('\n');
var allData = `aaaaa-bbb-z-y-x-123[abxyz]
a-b-c-d-e-f-g-h-987[abcde]
a-b-c-d-e-f-g-h-987[abdce]
not-a-real-room-404[oarel]
not-a-real-room-404[orael]
totally-real-room-200[decoy]`.split('\n');

var sumOfRealRoomSectors = 0;

allData.forEach((line) => {
  var charsWithChecksum = line.split('-');
  var last = charsWithChecksum.length - 1;
  var checksum = charsWithChecksum[last].split('[')[1].split(']')[0];
  var chars = charsWithChecksum.slice(0, last).concat([charsWithChecksum[last].split('[')[0]])
  var nameStrings = chars.slice(0, chars.length - 1);
  var sector = Number(chars.slice(chars.length -1)[0]);
  // console.log(nameStrings, sector, checksum);

  // skip those whose checksum length is not 5
  if (checksum.length !== 5) return;


  //create hashmap of letters and counts
  var letters = {};

  nameStrings.forEach((str) => {
    for (var i = 0; i < str.length; i++) {
      var current = str[i];
       letters[current] ? letters[current].count++ : letters[current] = {letter: current, count: 1};
    }
  });


  //iterate over checksum, if order is not correct, then reject this room as decoy
  //itereate 0-4 so we are sure first 5 chars match. directions only specify that first 5 must work. any others don't matter
  for (var j = 0; j < 4; j++) {
    if (!letters[checksum[j]] || !letters[checksum[j+1]]) return //checksum letter wasnt even in the name
    if (letters[checksum[j]].count < letters[checksum[j + 1]].count) return;
    // console.log(letters[checksum[j]])
    if (letters[checksum[j]].count === letters[checksum[j + 1]].count) {
      //check for alphabetical order
      if (letters[checksum[j]].letter > letters[checksum[j + 1]].letter) return;
    }
  }

    // only if checksum checks out do we add to the sum
  sumOfRealRoomSectors += sector;
});



console.log('part 1: the sum of the real room sector IDs is:', sumOfRealRoomSectors);
//185904 too high
// test case correctly gives 1514
