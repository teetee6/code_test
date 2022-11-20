const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(() => {
  let n;

  rl.on("line", function listener(line) {
    n = parseInt(line.trim(), 10);
    rl.close();
    rl.removeListener("line", listener);
  }).on("close", () => {
    // function dfs(lv, str) {
    //   if (lv === n + 1) return;
    //   for (let i = lv; i <= n; ++i) {
    //     dfs(i + 1, str + i + " ");
    //     console.log((str + i + " ").trimEnd());
    //   }
    // }
    // dfs(1, "");

    // function dfs(lv, arr) {
    //   if (lv === n + 1) return;
    //   for (let i = lv; i <= n; ++i) {
    //     arr.push(i);
    //     dfs(i + 1, arr);
    //     console.log(arr.reduce((acc, cur) => acc + cur + " ", "").trimEnd());
    //     arr.pop();
    //   }
    // }
    // dfs(1, []);

    function dfs(lv, arr) {
      if (lv === n + 1) return;
      for (let i = lv; i <= n; ++i) {
        arr.push(i);
        dfs(i + 1, arr);
        console.log(arr.reduce((acc, cur) => acc + cur + " ", "").trimEnd());
        arr.pop();
      }
    }
    dfs(1, []);
  });
})();
