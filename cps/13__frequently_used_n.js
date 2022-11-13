const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(() => {
  let str = 0;
  let arr = Array.from({ length: 10 }, (v) => 0);
  rl.on("line", (line) => {
    str = line.trim();
    rl.close();
  }).on("close", () => {
    for (let i = 0; i < str.length; ++i) {
      ++arr[parseInt(str[i], 10)];
    }
    let max = -Infinity;
    let answer = -1;
    for (let i = 0; i < 10; ++i) {
      if (arr[i] >= max) {
        max = arr[i];
        answer = i;
      }
    }
    console.log(answer);
  });
})();
