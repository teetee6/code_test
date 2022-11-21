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

    let arr = new Array(100).fill(0);
    function dfs(lv) {
      if (lv === n + 1) {
        let res = "";
        for (let i = 1; i < lv; ++i) {
          arr[i] === 1 ? (res += i + " ") : null;
        }
        process.stdout.write(res.trimEnd() + "\n");
        return;
      }
      arr[lv] = 1;
      dfs(lv + 1);
      arr[lv] = 0;
      dfs(lv + 1);
    }
    dfs(1);

    // let stack = [[1, ""]];
    // while (stack.length) {
    //   let cur = stack.pop();
    //   if (cur[0] === n + 1) {
    //     const arr = cur[1].trimEnd().split(" ");
    //     let res = "";
    //     for (let i = 1; i <= n; ++i) {
    //       arr[i - 1] === "1" ? (res += i + " ") : null;
    //     }
    //     process.stdout.write(res.trimEnd() + "\n");
    //     continue;
    //   }
    //   stack.push([cur[0] + 1, cur[1] + "0 "]);
    //   stack.push([cur[0] + 1, cur[1] + "1 "]);
    // }

    // let stack = [[1, ""]];
    // while (stack.length) {
    //   let cur = stack.pop();
    //   if (cur[0] === n + 1) {
    //     console.log(cur[1]);
    //     continue;
    //   }
    //   stack.push([cur[0] + 1, cur[1]]);
    //   stack.push([cur[0] + 1, cur[1] + cur[0] + " "]);
    // }
  });
})();
