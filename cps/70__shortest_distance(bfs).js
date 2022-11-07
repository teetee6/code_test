const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity,
});

(() => {
    let n, m;
    let i = 0;
    let graph;
    rl.on('line', function(line) {
        if (i === 0) {
            [n, m] = line.trim().split(' ').map(Number);
            graph = Array.from({length: 7}, v => []);
        }
        else {
            let [from, to] = line.trim().split(' ').map(Number);
            graph[from].push(to);
        }
        
        if (i === m) rl.close();
        ++i;
    }).on('close', function() {
        let visited = Array.from({length: 7}, v => Number(0));
        let Queue = [];
        let flag = false;
        Queue.push(1);
        visited[1] = 0;
        while(Queue.length) {
            let v = Queue.shift();
            for(let w of graph[v]) {
                if(!visited[w]) {
                    Queue.push(w);
                    visited[w] = visited[v] + 1;
                }
            }
        }
        for(let i = 2; i <= n; ++i) {
            console.log(i, ' : ', visited[i]);
        }
    });
})();