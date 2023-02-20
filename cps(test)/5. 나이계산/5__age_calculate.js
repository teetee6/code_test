const readline = require('readline');
const fs = require('fs'); // if file input
const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity
});

(() => {
    let str;
    const this_year = 2019;
    rl.on('line', function (line) {
        str = line;
        rl.close();
    }).on('close', function () {
        let age = 2000 + Number(str.slice(0, 2));
        if (Number(str[7]) === 1 || Number(str[7]) === 2)
            age = Number('19' + str.slice(0, 2));
        age = this_year - age + 1;
        const sex = Number(str[7]) % 2 === 0 ? 'W' : 'M';
        console.log(age + ' ' + sex);
    })
})();