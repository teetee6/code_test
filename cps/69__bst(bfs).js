const readline = require('readline');
const rl =readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity
});

(() => {
    let i = 0;
    let from, to;
    let graph = Array.from({length: 8}, (v) => []);
    rl.on('line', function(line) {
        ++i;
        [from, to] = line.trim().split(' ');
        graph[from].push(to);
        graph[to].push(from);
        if (i == 6) rl.close();
    }).on('close', function() {
        let visited = Array.from({length: 8}, (v) => false);
        let flag = false;
        let Queue = [];

        Queue.push(1);
        visited[1] = true;
        while(Queue.length) {
            let v = Queue.shift();
            console.log(v);
            for(let w of graph[v]) {
                if(!visited[w]) {
                    Queue.push(w);
                    visited[w] = true;
                }
            }
        }
        for(let v of visited) {
            if(!v) {
                flag = true;
                break;
            }
        }
        // if(flag) console.log('NO');
        // else console.log('YES');
        // console.log(graph);
    });
})();