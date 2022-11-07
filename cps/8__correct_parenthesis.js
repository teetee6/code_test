const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity
});

(() => {
    let str = '';
    rl.on('line', function (line) {
        str = line;
        rl.close();
    }).on('close', function () {
        let count = 0;
        for(let v of str) {
            if(v === '(') ++count;
            else if(v === ')') --count;
            if(count < 0) break;
        };
        if (count === 0) console.log('YES');
        else console.log('NO');
    });
})();
