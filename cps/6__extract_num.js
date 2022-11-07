const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity
});

(()=> {
    let num = '';
    rl.on('line', function (line) {
        for(let i=0; i < line.trim().length; ++i) {
            let tmp = line.charCodeAt(i) - '0'.charCodeAt(0);
            if (tmp >= 0 && tmp < 10)
                num += tmp;
        }
        rl.close();
    }).on('close', function () {
        num = Number(num);
        console.log(num);
        let count = 0;
        for(let i=1; i < Math.sqrt(num); ++i) {
            if (num % i === 0) {
                ++count;
            }
        }
        count *= 2;
        if (num % Math.sqrt(num) === 0) ++count;
        console.log(count);
    })
})();