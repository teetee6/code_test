const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity,
});

(() => {
    let n, k;
    rl.on('line', function(line) {
        [n, k] = line.trim().split(' ').map(Number);
        rl.close();
    }).on('close', function() {
        let Queue = [];
        let i = 0;
        while(++i <= n) Queue.push(i);
        
        i = 0;
        while(Queue.length !== 1) {
            ++i;
            if(i === k){ 
                Queue.shift();
                i = 0;
            }
            else
                Queue.push(Queue.shift());
        }
        console.log(Queue[0]);
    })
})();