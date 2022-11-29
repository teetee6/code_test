const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(function main() {
  let graph,
    n,
    q,
    i = -1;

  let answer = [];
  rl.on("line", function evLstn(line) {
    let input = line
      .trim()
      .split(" ")
      .filter((v) => v !== "")
      .map((v) => parseInt.call(null, v, 10));
    if (i == -1) {
      [n, q] = [...input];
      graph = Array.from({ length: n + 1 }, () => []);
      ++i;
      return;
    }
    if (i < n - 1) {
      graph[input[0]].push([input[1], input[2]]);
      graph[input[1]].push([input[0], input[2]]);
      ++i;
      return;
    } else if (i < n - 1 + q) {
      let [k, v] = [input[0], input[1]];
      algo(k, v);
      ++i;
    }
    if (i === n - 1 + q) {
      rl.close();
      rl.removeListener("line", evLstn);
      return;
    }
  }).on("close", () => {
    answer.forEach((v) => console.log(v));
  });

  function algo(k, v) {
    // let cnt = 0;
    // let queue = [];
    // let visited = new Array(n + 1).fill(false);
    // visited[v] = true;
    // queue.push([Infinity, v]); // [min_weight, node]

    // let i = 0;
    // while (i < queue.length) {
    //   // let cur = queue.shift();
    //   let cur = queue[i++];
    //   // item: [next, weight]
    //   for (let item of graph[cur[1]]) {
    //     if (visited[item[0]]) continue;
    //     let min_v = Math.min(cur[0], item[1]); // cur에 대해서 in값과 out값중 작은값을 기준으로 계속 최소비용으로 갱신하며 propogate
    //     if (min_v >= k) {
    //       // 무조건 연결된 거니까 min_v는 Infinity가 아님
    //       ++cnt;
    //       queue.push([min_v, item[0]]);
    //       visited[item[0]] = true;
    //     }
    //   }
    // }
    // console.log(cnt);

    // let cnt = 0;
    // let stack = [];
    // let visited = new Array(n + 1).fill(false);
    // visited[v] = true;
    // stack.push([Infinity, v]);

    // while (stack.length) {
    //   const cur = stack.pop();
    //   for (let item of graph[cur[1]]) {
    //     if (visited[item[0]]) continue;
    //     let min_v = Math.min(cur[0], item[1]);
    //     if (min_v >= k) {
    //       ++cnt;
    //       stack.push([min_v, item[0]]);
    //       visited[item[0]] = true;
    //     }
    //   }
    // }
    // console.log(cnt);

    let visited = new Array(n + 1).fill(false);
    let cnt = 0;
    visited[v] = true;
    dfs(v, Infinity);

    function dfs(v, cost) {
      for (let item of graph[v]) {
        if (visited[item[0]]) continue;
        let min_v = Math.min(cost, item[1]);
        if (min_v >= k) {
          ++cnt;
          visited[item[0]] = true;
          dfs(item[0], min_v);
        }
      }
    }
    console.log(cnt);
  }
})();

// 만약 (3->cur->4)->2의 비용이고, k가 3이라고 해보자
// 앞의 유사도는 3이라서 셈하고, 그 뒤 2는 3보다 작으니 셈하지 않는다. 그 뒤에 뒤는 말할 필요도 없다.
// 즉 k보다 작은게 하나라도 나오면 그 뒤에 줄줄이 소세지는 고려하지 않는다.
