const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(() => {
  let graph,
    n,
    q,
    i = -1;

  let answer = [];
  rl.on("line", (line) => {
    let input = line
      .trim()
      .split(" ")
      .map((v) => parseInt.call(null, v, 10));
    if (i == -1) {
      [n, q] = [input[0], input[1]];
      graph = Array.from({ length: n }, (v) =>
        Array.from({ length: n }, (v) => Infinity)
      );
      ++i;
      return;
    }
    if (i < n - 1) {
      graph[input[0] - 1][input[1] - 1] = input[2];
      graph[input[1] - 1][input[0] - 1] = input[2];
      ++i;
      if (i === n - 1) algo();
      return;
    } else if (i < n - 1 + q) {
      let [k, v] = [input[0], input[1]];
      let cnt = 0;
      for (let j = 1; j <= n; ++j) {
        graph[v - 1][j - 1] >= k ? ++cnt : undefined;
      }
      answer.push(cnt - 1);
      ++i;
    }
    if (i === n - 1 + q) {
      rl.close();
      return;
    }
  }).on("close", () => {
    answer.forEach((v) => console.log(v));
  });

  function algo() {
    console.log(graph);
    for (let i = 1; i <= n; ++i) {}
    console.log(graph);
  }
})();
