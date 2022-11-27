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
      graph = Array.from({ length: n }, () => []);
      ++i;
      return;
    }
    if (i < n - 1) {
      graph[input[0] - 1].push([input[1] - 1, input[2]]);
      graph[input[1] - 1].push([input[0] - 1, input[2]]);
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

  function dfs(k, v) {}

  function algo(k, v) {
    dfs(k, v);

    // while (stack.length) {
    //   const cur = stack.pop();
    //   if (visited[cur[0]]) continue;
    //   visited[cur[0]] = true;
    //   cur[1] !== -1 && cur[1] >= k
    //     ? (++cnt, (min = Math.min(min, cur[1])), min === cur[1] ? )
    //     : null;
    //   for (let elem of graph[cur[0]]) {
    //     stack.push(elem);
    //   }
    // }
    console.log(cnt);
  }
})();
