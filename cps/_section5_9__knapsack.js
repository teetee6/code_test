const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(function main() {
  let n,
    total_weight,
    i = -1;
  const arr = [];
  rl.on("line", function evtLstn(line) {
    if (++i === 0) {
      [n, total_weight] = line
        .trim()
        .split(" ")
        .map((v) => parseInt.call(null, v, 10));
      return;
    }
    arr.push(
      line
        .trim()
        .split(" ")
        .map((v) => Number(v))
    );
    if (i === n) {
      rl.removeListener("line", evtLstn);
      rl.close();
      return;
    }
  }).on("close", () => {
    const knapsack = Array.from({ length: total_weight + 1 }, (v) => 0);
    arr.forEach(([weight, value]) => {
      for (let i = weight; i <= total_weight; ++i) {
        knapsack[i] = Math.max(knapsack[i], knapsack[i - weight] + value);
      }
    });
    console.log(knapsack[total_weight]);
  });
})();
