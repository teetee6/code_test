const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(() => {
  let n = -1;
  let arr = [];
  rl.on("line", function evLstn(line) {
    line = line
      .trim()
      .split(" ")
      .filter((v) => v !== "")
      .map(Number);
    if (n === -1) {
      n = line[0];
      return;
    }
    arr = arr.concat(line);
    while (n < arr.length) arr.pop();
    if (n === arr.length) {
      rl.close();
      rl.removeListener("line", evLstn);
      return;
    }
  }).on("close", function () {
    arr.sort((a, b) => a - b);
    console.log(arr.join(" "));
  });
})();
