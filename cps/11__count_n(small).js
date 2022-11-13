const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(() => {
  let n = 0;
  rl.on("line", (line) => {
    n = Number(line.trim());
    rl.close();
  }).on("close", () => {
    let count = 0;
    for (let i = 1; i <= n; ++i) count += i.toString().length;
    console.log(count);
  });
})();
