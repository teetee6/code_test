const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(function main() {
  let i = -1,
    n;
  let coins;
  let money;
  rl.on("line", function evtLstn(line) {
    if (++i === 0) {
      n = parseInt(line.trim(), 10);
      return;
    }
    if (i === 1) {
      coins = line
        .trim()
        .split(" ")
        .filter((v) => v !== "")
        .map(Number);
    }
    if (i === 2) {
      money = line.trim();
      rl.removeListener("line", evtLstn);
      rl.close();
    }
  }).on("close", () => {
    const dy = Array.from({ length: money + 1 }, (v) => Infinity);
    dy[0] = 0;
    coins.forEach((coin) => {
      for (let i = coin; i <= money; i++) {
        dy[i] = Math.min(dy[i], dy[i - coin] + 1);
      }
    });
    console.log(dy[money]);
  });
})();
