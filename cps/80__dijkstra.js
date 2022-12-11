const PriorityQueue = require("./priority_queue");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(function () {
  let n,
    m,
    i = -1;
  let graph;
  rl.on("line", function evtLstn(line) {
    let str = line
      .trim()
      .split(" ")
      .filter((v) => v !== "")
      .map(Number);
    if (++i === 0) {
      [n, m] = [...str];
      graph = Array.from({ length: n + 1 }, (v) => new Array(0));
      return;
    }
    let [from, to, dist] = [str[0], str[1], str[2]];
    graph[from].push([to, dist]);

    if (i === m) {
      rl.removeListener("line", evtLstn);
      rl.close();
      return;
    }
  }).on("close", () => {
    const comp = (a, b) => {
      return a[1] < b[1];
    };
    let dist = Array.from({ length: n + 1 }, (v) => Infinity);
    let pq = new PriorityQueue(comp);
    dist[1] = 0;
    pq.enqueue([1, 0]);
    while (!pq.isEmpty()) {
      let [cur, curCost] = pq.dequeue();
      if (dist[cur] < curCost) continue; //여기 넘어가면 dist[cur] === curCost 임
      for (let [next, nextCost] of graph[cur]) {
        let newCost = curCost + nextCost;
        if (dist[next] > newCost) {
          dist[next] = newCost;
          pq.enqueue([next, newCost]);
        }
      }
    }
    for (let i = 2; i <= n; ++i)
      console.log(i, " : ", dist[i] === Infinity ? "impossible" : dist[i]);
  });
})();

/*
6 9
1 2 12
1 3 4
2 1 2
2 3 5
2 5 5
3 4 5
4 2 2
4 5 5
6 4 5

*/
