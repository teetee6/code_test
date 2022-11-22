const readline = require("readline");
const { deflateSync } = require("zlib");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(() => {
  let n = -1;
  let list = [];
  rl.on("line", function evLstn(line) {
    line = line
      .split(" ")
      .filter((v) => v !== "")
      .map(Number);
    if (n === -1) {
      n = Number(line[0]);
      return;
    }
    list.push(...line);
    while (n < list.length) list.pop();
    if (n === list.length) {
      rl.close();
      rl.removeListener("line", evLstn);
      return;
    }
  }).on("close", function () {
    // let arr = new Array(11).fill(0);
    // const total = list.reduce((acc, cur) => acc + cur, 0);
    // let flag = false;
    // function dfs(lv) {
    //   // if(sum>(total/2)) return; (flag == "NO"일때 효과가 있음)
    //   if (flag === true) return;
    //   if (lv === n) {
    //     let sum = 0;
    //     for (let i = 1; i <= lv; ++i)
    //       arr[i - 1] === 1 ? (sum += list[i - 1]) : null;
    //     sum === total - sum ? (flag = true) : null;
    //     return;
    //   }
    //   arr[lv] = 1;
    //   dfs(lv + 1);
    //   arr[lv] = 0;
    //   dfs(lv + 1);
    // }
    // dfs(0);
    // console.log(flag === true ? "YES" : "NO");

    // const total = list.reduce((acc, cur) => acc + cur, 0);
    // let flag = false;
    // function dfs(lv, sum) {
    //   if (sum > total / 2) return;
    //   if (flag === true) return;
    //   if (lv === n) {
    //     sum === total - sum ? (flag = true) : null;
    //     return;
    //   }
    //   dfs(lv + 1, sum);
    //   dfs(lv + 1, sum + list[lv]);
    // }
    // dfs(0, 0);
    // console.log(flag === true ? "YES" : "NO");

    const total = list.reduce((acc, cur) => acc + cur, 0);
    let flag = false;
    let stack = [[0, 0]];
    while (stack.length) {
      let cur = stack.pop();
      if (cur[1] > total / 2) continue;
      if (cur[0] === n) {
        cur[1] === total - cur[1] ? (flag = true) : null;
        if (flag) break;
        continue;
      }
      stack.push([cur[0] + 1, cur[1] + list[cur[0]]]);
      stack.push([cur[0] + 1, cur[1]]);
    }
    console.log(flag === true ? "YES" : "NO");
  });
})();
