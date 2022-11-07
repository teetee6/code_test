const readline = require('readline');
const fs = require('fs'); // if file input
const rl = readline.createInterface({
    input: process.stdin,
    // input: fs.createReadStream('input.txt'),
    crlfDelay: Infinity, // recognize \r\n
    // output: process.stdout // this causes delay
});

(() => {
    let input = [];
    let n = 0;
    let min_age, max_age;
    max_age = -Infinity;
    min_age = Infinity;

    rl.on('line', function (line) {
        if (n === 0) {
            n = Number(line);
            return;
        }

        // const spl = line.trim().split(' ').map(Number);
        const spl = line.trim().split(' ').map(v => {
            min_age = Math.min(min_age, v);
            max_age = Math.max(max_age, v);
            return Number(v);
        });
        input.push(...spl);
        if(input.length === n) rl.close(); 
        
    }).on('close', function () {
        console.log(max_age - min_age);
        process.exit();
    });    
})();