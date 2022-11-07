const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity
});

(() => {
    let str = '';
    rl.on('line', function (line) {
        str = line.trim().split(/\s+/).join('').toLocaleLowerCase();
        rl.close();
    }).on('close', function () {
        console.log(str);
        process.exit();
    });
})();
