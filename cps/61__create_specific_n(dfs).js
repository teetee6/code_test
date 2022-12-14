const readline = require("readline");
const WrapArray = require("./wrapArray");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(() => {
  let n = -1,
    m;
  let arr = [];
  rl.on("line", function evLstn(line) {
    line = line
      .trim()
      .split(" ")
      .filter((v) => v !== "")
      .map(Number);
    if (n === -1) {
      [n, m] = line;
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
    // let stack = [[0, 0]];
    // let cnt = 0;
    // while (stack.length) {
    //   const cur = stack.pop();
    //   if (cur[0] === n) {
    //     cur[1] === m ? ++cnt : null;
    //     continue;
    //   }
    //   stack.push([cur[0] + 1, cur[1] + arr[cur[0]]]);
    //   stack.push([cur[0] + 1, cur[1]]);
    //   stack.push([cur[0] + 1, cur[1] - arr[cur[0]]]);
    // }
    // console.log(cnt);

    // let queue = [[0, 0]];
    // let cnt = 0;
    // while (queue.length) {
    //   //   const cur = queue.shift();
    //   const cur = queue[0];
    //   queue = queue.slice(1);
    //   if (cur[0] === n) {
    //     cur[1] === m ? ++cnt : null;
    //     continue;
    //   }
    //   queue.push([cur[0] + 1, cur[1] + arr[cur[0]]]);
    //   queue.push([cur[0] + 1, cur[1]]);
    //   queue.push([cur[0] + 1, cur[1] - arr[cur[0]]]);
    // }
    // console.log(cnt);

    // let queue = WrapArray([[0, 0]]);
    // let cnt = 0;
    // while (queue.length) {
    //   const cur = queue.shift();
    //   if (cur[0] === n) {
    //     cur[1] === m ? ++cnt : null;
    //     continue;
    //   }
    //   queue.push([cur[0] + 1, cur[1] + arr[cur[0]]]);
    //   queue.push([cur[0] + 1, cur[1]]);
    //   queue.push([cur[0] + 1, cur[1] - arr[cur[0]]]);
    // }
    // console.log(cnt);

    let queue = new Array([0, 0]);
    let f_idx = -1,
      l_idx = 0;
    let cnt = 0;
    while (f_idx < l_idx) {
      ++f_idx;
      const cur = queue[f_idx];
      if (cur[0] === n) {
        cur[1] === m ? ++cnt : null;
        continue;
      }
      queue.push([cur[0] + 1, cur[1] + arr[cur[0]]]);
      queue.push([cur[0] + 1, cur[1]]);
      queue.push([cur[0] + 1, cur[1] - arr[cur[0]]]);
      l_idx += 3;
    }
    console.log(cnt);
  });
})();

// Below -- shift()?????? ?????????, Array??? Proxy??? Wrapping????????? ??? ????????? ?????????
// https://stackoverflow.com/questions/6501160/why-is-pop-faster-than-shift
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy#%EC%86%8D%EC%84%B1%EC%9C%BC%EB%A1%9C_%EB%B0%B0%EC%97%B4_%EC%95%84%EC%9D%B4%ED%85%9C_%EA%B0%9D%EC%B2%B4_%EC%B0%BE%EA%B8%B0
// Proxy()??? get,set ?????? ???????????? ????????? ????????????????????? ????????? ???????????????()
