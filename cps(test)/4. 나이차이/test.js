// usage : $node test.js
// 실행파일명은 a
// in[1~5].txt, out[1~5].txt 비교 테스트
const readline = require('readline');
const fs = require('fs'); // if file input
const events = require('events');
const childProcess = require('child_process');
const exec = (cmd) => childProcess.execSync(cmd);

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m";

let check = 0;

console.log(FgMagenta, "\tYour color", Reset, FgGreen, "Answer color", Reset);
console.log();

(async function forLoop (_)  {
    let str1, str2;
    for(let i=0; i < 5 * 2; ++i) {
        if(i % 2 === 0 ) {
            let tmp = exec('./a < in' + (i/2 + 1) + '.txt');
            str1 = Buffer.from(tmp).toString().trim();
            console.log(FgMagenta, str1, Reset);
            // console.log(str1);
        }
        else
        {
            const rl = readline.createInterface({
                input: fs.createReadStream('out' + Math.floor(i/2 + 1) + '.txt'),
                crlfDelay: Infinity, // recognize \r\n
                // output: process.stdout // this causes delay
            });

            str2 = '';
            rl.on('line', function (line) {
                str2 += line;
            })
            await events.once(rl, 'close');
            rl.close();
            console.log(FgGreen, str2, Reset);
            // console.log(str2);

            if(str1.localeCompare(str2) === 0) {
                console.log(FgBlue, "OK", Reset);
                ++check;
            }
        }
    }

    if (check === 5)
        console.log(FgBlue, "[All OK]", Reset);
    else
        console.log(FgRed, "[Wrong]", Reset);
})();

