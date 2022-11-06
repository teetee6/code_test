// https://velog.io/@exploit017/%EB%B0%B1%EC%A4%80Node.js-Node.js-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0

//// method1 - readline from stdin (one, multi line)
const readline = require('readline');
const fs = require('fs'); // if file input
const rl = readline.createInterface({
    input: process.stdin,
    // input: fs.createReadStream('input.txt'),
    crlfDelay: Infinity, // recognize \r\n
    // output: process.stdout // this causes delay
});

let input = [];
rl.on('line', function (line) {
    input.push(line.split(' '));      // rl.close(); // one line
    /* processing here */
    
}).on('close', function () {
    console.log(input);
    process.exit();
});

//// method2 - fs Module (one line)
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// let num = Number(input);

// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

//// method2 - fs Module (multi line)
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let count = input[0];
// let numbers = [];

// for (let i = 0; i < input.length; i++) {
//   if (input[i] !== '') {
//     // input[i].split(' ').forEach((num) => {numbers.push(num)});
//     numbers.push(input[i].split(' '));
//   }
// }

// for (let i = 0; i < numbers.length; i++){
//   console.log(numbers[i]);
// }