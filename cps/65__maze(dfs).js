const readline = require("readline");
const events = require("events");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(async function main() {
  let i = -1;
  let maze;
  rl.on("line", function evntLstn(line) {
    if (++i === 0) {
      n = Number(line.trim());
      maze = Array.from({ length: n + 1 }, (v) => []);
    } else if (i <= n) {
      line = line
        .trim()
        .split(" ")
        .filter((v) => v != "")
        .map(Number);
      for (let j = 1; j <= n; ++j) {
        maze[i][j] = line[j - 1];
      }
    }
    if (i === n) {
      rl.removeListener("line", evntLstn);
      rl.close();
    }
  });
  await events.once(rl, "close");

  let cnt = 0;
  let ch = Array.from({ length: n + 1 }, (v) => Array(n + 1).fill(0));
  let dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function dfs(i, j) {
    if (i === n && j === n) {
      cnt++;
    } else {
      for (let _i = 0; _i < 4; ++_i) {
        const xx = i + dir[_i][0];
        const yy = j + dir[_i][1];
        if (xx < 1 || xx > n || yy < 1 || yy > n) continue;
        if (maze[xx][yy] === 0 && ch[xx][yy] === 0) {
          ch[xx][yy] = 1;
          dfs(xx, yy);
          ch[xx][yy] = 0;
        }
      }
    }
  }
  ch[1][1] = 1;
  dfs(1, 1);

  console.log(cnt);
})();

/*
7
0 0 0 0 0 0 0
0 1 1 1 1 1 0
0 0 0 1 0 0 0
1 1 0 1 0 1 1
1 1 0 0 0 0 1
1 1 0 1 1 0 0
1 0 0 0 0 0 0
*/
