const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(() => {
  let graph,
    n,
    m,
    i = -1;
  rl.on("line", (line) => {
    ++i;
    let input = line
      .trim()
      .split(" ")
      .map((v) => parseInt.call(null, v, 10));
    if (i == 0) {
      [n, m] = [input[0], input[1]];
      graph = Array.from({ length: n }, (v) =>
        Array.from({ length: n }, (v) => Infinity)
      );
      return;
    }
    graph[input[0] - 1][input[1] - 1] = input[2];
    if (i == m) {
      rl.close();
      return;
    }
  }).on("close", () => {
    for (let i = 1; i <= n; ++i) graph[i - 1][i - 1] = 0;
    for (let k = 1; k <= n; ++k)
      for (let i = 1; i <= n; ++i)
        for (let j = 1; j <= n; ++j)
          graph[i - 1][j - 1] = Math.min(
            graph[i - 1][k - 1] + graph[k - 1][j - 1],
            graph[i - 1][j - 1]
          );

    for (let i = 1; i <= n; ++i) {
      let str = "";
      for (let j = 1; j <= n; ++j) {
        str += graph[i - 1][j - 1] === Infinity ? "M" : graph[i - 1][j - 1];
        str += " ";
      }
      console.log(str.trimEnd());
    }
  });
})();
