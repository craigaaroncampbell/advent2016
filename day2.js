var instructionsInput = `DDDURLURURUDLDURRURULLRRDULRRLRLRURDLRRDUDRUDLRDUUDRRUDLLLURLUURLRURURLRLUDDURUULDURDRUUDLLDDDRLDUULLUDURRLUULUULDLDDULRLDLURURUULRURDULLLURLDRDULLULRRRLRLRULLULRULUUULRLLURURDLLRURRUUUDURRDLURUURDDLRRLUURLRRULURRDDRDULLLDRDDDDURURLLULDDULLRLDRLRRDLLURLRRUDDDRDLLRUDLLLLRLLRUDDLUUDRLRRRDRLRDLRRULRUUDUUDULLRLUDLLDDLLDLUDRURLULDLRDDLDRUDLDDLDDDRLLDUURRUUDLLULLRLDLUURRLLDRDLRRRRUUUURLUUUULRRUDDUDDRLDDURLRLRLLRRUDRDLRLDRRRRRRUDDURUUUUDDUDUDU
RLULUULRDDRLULRDDLRDUURLRUDDDUULUUUDDRDRRRLDUURDURDRLLLRDDRLURLDRRDLRLUURULUURDRRULRULDULDLRRDDRLDRUDUDDUDDRULURLULUDRDUDDDULRRRURLRRDLRDLDLLRLUULURLDRURRRLLURRRRRLLULRRRDDLRLDDUULDLLRDDRLLUUDRURLRULULRLRUULUUUUUDRURLURLDDUDDLRDDLDRRLDLURULUUDRDLULLURDLLLRRDRURUDDURRLURRDURURDLRUDRULUULLDRLRRDRLDDUDRDLLRURURLUDUURUULDURUDULRLRDLDURRLLDRDUDRUDDRLRURUDDLRRDLLLDULRRDRDRRRLURLDLURRDULDURUUUDURLDLRURRDRULLDDLLLRUULLLLURRRLLLDRRUDDDLURLRRRDRLRDLUUUDDRULLUULDURLDUUURUDRURUDRDLRRLDRURRLRDDLLLULUDDUULDURLRUDRDDD
RDDRUDLRLDDDRLRRLRRLUULDRLRUUURULRRLUURLLLRLULDDLDLRLULULUUDDDRLLLUDLLRUDURUDDLLDUDLURRULLRDLDURULRLDRLDLDRDDRUDRUULLLLRULULLLDDDULUUDUUDDLDRLRRDLRLURRLLDRLDLDLULRLRDLDLRLUULLDLULRRRDDRUULDUDLUUUUDUDRLUURDURRULLDRURUDURDUULRRULUULULRLDRLRLLRRRLULURLUDULLDRLDRDRULLUUUDLDUUUDLRDULRDDDDDDDDLLRDULLUDRDDRURUDDLURRUULUURURDUDLLRRRRDUDLURLLURURLRDLDUUDRURULRDURDLDRUDLRRLDLDULRRUDRDUUDRLURUURLDLUDLLRDDRDU
LLDDDDLUDLLDUDURRURLLLLRLRRLDULLURULDULDLDLLDRRDLUDRULLRUUURDRLLURDDLLUDDLRLLRDDLULRLDDRURLUDRDULLRUDDLUURULUUURURLRULRLDLDDLRDLDLLRUURDLUDRRRDDRDRLLUDDRLDRLLLRULRDLLRLRRDDLDRDDDUDUDLUULDLDUDDLRLDUULRULDLDULDDRRLUUURUUUDLRDRULDRRLLURRRDUDULDUDUDULLULLULULURLLRRLDULDULDLRDDRRLRDRLDRLUDLLLUULLRLLRLDRDDRUDDRLLDDLRULLLULRDDDLLLDRDLRULDDDLULURDULRLDRLULDDLRUDDUDLDDDUDRDRULULDDLDLRRDURLLRLLDDURRLRRULLURLRUDDLUURULULURLRUDLLLUDDURRLURLLRLLRRLDULRRUDURLLDDRLDLRRLULUULRRUURRRDULRLRLRDDRDULULUUDULLLLURULURRUDRLL
UULLULRUULUUUUDDRULLRLDDLRLDDLULURDDLULURDRULUURDLLUDDLDRLUDLLRUURRUDRLDRDDRRLLRULDLLRUUULLLDLDDULDRLRURLDRDUURLURDRUURUULURLRLRRURLDDDLLDDLDDDULRUDLURULLDDRLDLUDURLLLLLRULRRLLUDRUURLLURRLLRDRLLLRRDDDRRRDLRDRDUDDRLLRRDRLRLDDDLURUUUUULDULDRRRRLUDRLRDRUDUDDRULDULULDRUUDUULLUDULRLRRURDLDDUDDRDULLUURLDRDLDDUURULRDLUDDLDURUDRRRDUDRRDRLRLULDRDRLRLRRUDLLLDDDRURDRLRUDRRDDLDRRLRRDLUURLRDRRUDRRDLDDDLRDDLRDUUURRRUULLDDDLLRLDRRLLDDRLRRRLUDLRURULLDULLLUDLDLRLLDDRDRUDLRRDDLUU`;


var instructions = instructionsInput.split('\n');

var keypad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

var bathroomInputs = [];

var coordinates = {
  x: 1,
  y: 1
};

var currentPosition = keypad[coordinates.y][coordinates.x];

function getInputs1() {
  instructions.forEach((sequence) => {
    console.log('\n')
    for (var i = 0; i < sequence.length; i++) {
      if (sequence[i] === 'U' && coordinates.y > 0) coordinates.y--;
      if (sequence[i] === 'D' && coordinates.y < 2) coordinates.y++;
      if (sequence[i] === 'L' && coordinates.x > 0) coordinates.x--;
      if (sequence[i] === 'R' && coordinates.x < 2) coordinates.x++;
      currentPosition = keypad[coordinates.y][coordinates.x];
    }
    bathroomInputs.push(currentPosition);
  });
}



var bathroomInputs2 = [];
var coordinates2 = {
  x: 0,
  y: 2
}

var keypad2 = [
  ['-', '-', '1', '-', '-'],
  ['-', '2', '3', '4', '-'],
  ['5', '6', '7', '8', '9'],
  ['-', 'A', 'B', 'C', '-'],
  ['-', '-', 'D', '-', '-']
];

var currentPosition2 = keypad2[coordinates2.y][coordinates2.x];

var allowed = {
  '1': {'D': true},
  '2': {'D': true, 'R': true},
  '3': {'D': true, 'R': true, 'U': true, 'L': true},
  '4': {'D': true, 'L': true},
  '5': {'R': true},
  '6': {'D': true, 'R': true, 'U': true, 'L': true},
  '7': {'D': true, 'R': true, 'U': true, 'L': true},
  '8': {'D': true, 'R': true, 'U': true, 'L': true},
  '9': {'L': true},
  'A': {'U': true, 'R': true},
  'B': {'D': true, 'R': true, 'U': true, 'L': true},
  'C': {'L': true, 'U': true},
  'D': {'U': true}
};

function getInputs2() {
  instructions.forEach((sequence) => {
    console.log('\n')
    for (var i = 0; i < sequence.length; i++) {
      if (allowed[currentPosition2][sequence[i]]) {
              if (sequence[i] === 'U') coordinates2.y--;
              if (sequence[i] === 'D') coordinates2.y++;
              if (sequence[i] === 'L') coordinates2.x--;
              if (sequence[i] === 'R') coordinates2.x++;
      }
      currentPosition2 = keypad2[coordinates2.y][coordinates2.x];
    }
    bathroomInputs2.push(currentPosition2);
  });
}

getInputs1();
var bathroomCode = bathroomInputs.join('');
console.log('The bathroom code is:', bathroomCode);

getInputs2();
var bathroomCode2 = bathroomInputs2.join('');
console.log('no, wait, the real code is:', bathroomCode2);
