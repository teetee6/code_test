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
    let accumulate = 0;
    let residue = 0;
    let count = 0;
    let tmp_n = n;
    while (tmp_n >= 10) {
      ++accumulate;
      tmp_n = Math.floor(tmp_n / 10);
    }
    // if 8527, the number of 1~999
    if (accumulate > 0) {
      for (let i = 1; i <= accumulate; ++i) {
        count += i * 9 * Math.pow(10, i - 1);
      }
    }
    // the number of 1000 ~ 8527
    residue = n - Math.pow(10, accumulate) + 1; // 7528ea
    residue *= accumulate + 1; // 7528 * 4ea
    count += residue;
    console.log(count);
  });
})();
