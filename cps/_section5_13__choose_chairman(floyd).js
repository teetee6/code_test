const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(() => {
  let graph,
    n,
    i = -1;
  rl.on("line", function lineListener(line) {
    let input = line
      .trim()
      .split(" ")
      .map((v) => parseInt.call(null, v, 10));
    if (i == -1) {
      n = input[0];
      graph = Array.from({ length: n }, (v) =>
        Array.from({ length: n }, (v) => Infinity)
      );
      i = 0;
      return;
    }
    if (input[0] === input[1] && input[1] === -1) {
      rl.close();
      rl.removeListener("line", lineListener);
      // rl.removeAllListeners();
      return;
    }
    graph[input[0] - 1][input[1] - 1] = 1;
    graph[input[1] - 1][input[0] - 1] = 1;
  }).on("close", () => {
    for (let i = 1; i <= n; ++i) graph[i - 1][i - 1] = 0;
    for (let k = 1; k <= n; ++k)
      for (let i = 1; i <= n; ++i)
        for (let j = 1; j <= n; ++j)
          graph[i - 1][j - 1] = Math.min(
            graph[i - 1][k - 1] + graph[k - 1][j - 1],
            graph[i - 1][j - 1]
          );

    let score = [];
    for (let i = 1; i <= n; ++i) {
      let max_value = -Infinity;
      for (let j = 1; j <= n; ++j)
        max_value = Math.max(max_value, graph[i - 1][j - 1]);
      score.push(max_value);
    }
    const cutoff_score = Math.min(...score);
    let choose = [];
    for (let i = 1; i <= n; ++i) {
      score[i - 1] === cutoff_score ? choose.push(i) : undefined;
    }
    console.log(cutoff_score + " " + choose.length);
    console.log(choose.reduce((prev, cur) => prev + cur + " ", "").trimEnd());
  });
})();
