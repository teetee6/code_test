let PriorityQueue = require('./priority_queue.js');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity,
});

(() => {
    const pq = new PriorityQueue();
    rl.on('line', (line) => {
        let value = parseInt.call(null, line.trim(), 10);
        if (value === -1)
            process.exit();
        else if (value === 0){
            const x = pq.dequeue();
            typeof x === 'undefined' ? console.log(-1) : console.log(x.value);
        }
        else
           pq.enqueue(value, value);
    });
})();