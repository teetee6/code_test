const readline = require('readline');
// const fs = require('fs'); // if file input
const rl = readline.createInterface({
    input: process.stdin,
    // input: fs.createReadStream('input.txt'),
    crlfDelay: Infinity, // recognize \r\n
    // output: process.stdout // this causes delay
});

let input = [];
rl.on('line', function (line) {
    input.push(line.split(' '));      
    rl.close(); // one line
    
}).on('close', function () {
    let num = Number(input[0][0])
    let sum = 1;
    let str = String(sum);
    for (let i = 2; i <= num / 2; ++i) {
        if (num % i === 0) {
            str += ' + ' + i;
            sum += i;
        }
    }
    str += ' = ' + sum;
    console.log(str);
    process.exit();
});