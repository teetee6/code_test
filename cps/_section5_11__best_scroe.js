const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(function main() {
  let i = -1,
    n,
    m;
  const quiz = [];
  rl.on("line", function evtLstn(line) {
    if (++i === 0) {
      [n, m] = line
        .trim()
        .split(" ")
        .filter((v) => v !== "")
        .map(Number);
      return;
    }
    quiz.push(
      line
        .trim()
        .split(" ")
        .filter((v) => v !== "")
        .map(Number)
    );
    if (i === n) {
      rl.removeListener("line", evtLstn);
      rl.close();
    }
  }).on("close", () => {
    const dy = Array.from({ length: m + 1 }, (v) => 0);
    quiz.forEach(([score, time]) => {
      for (let i = m; i >= time; i--) {
        dy[i] = Math.max(dy[i], dy[i - time] + score);
      }
    });
    console.log(dy[m]);
  });
})();
