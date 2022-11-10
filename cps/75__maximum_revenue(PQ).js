const priority_queue = require('./priority_queue.js');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity,
});

(() => {
    const pq = new priority_queue();
    let i = -1;
    let n;
    let arr = [];
    rl.on('line', (line) => {
        const input = line.trim().split(' ').map(v => parseInt.call(null, v, 10));
        if (++i === 0) {
            n = input[0];
            return;
        }
        arr.push([input[0], input[1]]);
        if (i === n) {
            arr.sort((a, b) => b[1] - a[1]);
            rl.close();
            return;
        }
    }).on('close', () => {
        let day = arr[0][1];
        let arr_j = 0;
        let revenue = 0;
        for(let last_day=day; last_day >= 1; --last_day) {
            while(arr_j < arr.length && arr[arr_j][1] === last_day) {
                arr[arr_j][1] === last_day ? pq.enqueue(arr[arr_j][0], arr[arr_j][0]) : null;
                ++arr_j;
            }
            if(!pq.isEmpty())
                revenue += pq.dequeue().value;
        }
        console.log(revenue);
    });
})();