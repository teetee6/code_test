const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity,
});

(() => {
    let s, e;
    rl.on('line', function(line) {
        [s, e] = line.trim().split(' ').map(Number);
        rl.close();
    }).on('close', function () {
        let Queue = [];
        Queue.push([s, 0]);
        const weight = [1, -1, 5];
        let visited = Array.from({length: 10001}, v => false);
        while(Queue.length) {
            let v = Queue.shift();
            if(v[0] === e) {
                console.log(v[1]);
                break;
            }
            for(let w of weight) {
                let next = v[0] + w;
                if(next >= 1 && next <= 10000 && !visited[next]) {
                    Queue.push([next, v[1] + 1]);
                    visited[next] = true;
                }
            }
        }
    })
})();