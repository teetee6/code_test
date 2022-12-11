// https://school.programmers.co.kr/questions/35890
// 다익스트라- 시간초과

class PriorityQueue {
  heap;
  comp;
  constructor(
    comp = (a, b) => {
      return a > b;
    }
  ) {
    this.heap = [];
    this.comp = comp;
  }
  parentIndex = (idx) => {
    return Math.floor((idx - 1) / 2);
  };
  leftIndex = (idx) => {
    return idx * 2 + 1;
  };
  rightIndex = (idx) => {
    return idx * 2 + 2;
  };
  enqueue(obj) {
    this.heap.push(obj);
    let index = this.heap.length - 1;
    const lastNode = this.heap[index];
    while (index > 0) {
      if (this.comp(lastNode, this.heap[this.parentIndex(index)])) {
        this.heap[index] = this.heap[this.parentIndex(index)];
        index = this.parentIndex(index);
      } else break;
    }
    this.heap[index] = lastNode;
  }
  dequeue() {
    if (this.heap.length <= 1) return this.heap.shift();
    const returnNode = this.heap[0];
    this.heap[0] = this.heap.pop();
    let index = 0;
    const rootNode = this.heap[index];
    while (this.leftIndex(index) < this.heap.length) {
      let lt_index = this.leftIndex(index);
      let rt_index = this.rightIndex(index);
      let c_index = lt_index;
      if (
        rt_index < this.heap.length &&
        this.comp(this.heap[rt_index], this.heap[lt_index])
      )
        c_index = rt_index;
      if (this.comp(this.heap[c_index], rootNode)) {
        this.heap[index] = this.heap[c_index];
        index = c_index;
      } else break;
    }
    this.heap[index] = rootNode;
    return returnNode;
  }
  peek() {
    return this.heap[0];
  }
  isEmpty() {
    return this.heap.length ? false : true;
  }
}

////////////////////////////////////

function solution(alp, cop, problems) {
  problems = problems.map((arr) => [...arr]);
  problems.push([0, 0, 1, 0, 1]);
  problems.push([0, 0, 0, 1, 1]);
  console.log(problems);
  let [max_alp_req, max_cop_req] = [0, 0];
  problems.forEach((v) => {
    if (max_alp_req < v[0]) max_alp_req = v[0];
    if (max_cop_req < v[1]) max_cop_req = v[1];
  });

  if (alp >= max_alp_req && cop >= max_cop_req) return 0;

  let pq = new PriorityQueue(function (a, b) {
    if (a[2] != b[2]) return a[2] < b[2];
    if (a[0] != b[0]) return a[0] > b[0];
    if (a[1] != b[1]) return a[1] > b[1];
    return false;
  });
  pq.enqueue([alp, cop, 0]);
  let res_cost = Infinity;
  let visited = new Set([]);

  while (!pq.isEmpty()) {
    let curNode = pq.dequeue();
    let [now_alp, now_cop, now_cost] = curNode;
    now_alp = Math.min(now_alp, max_alp_req);
    now_cop = Math.min(now_cop, max_cop_req);
    curNode = [now_alp, now_cop, now_cost];
    console.log(now_alp, now_cop, now_cost);

    if (visited.has(curNode)) continue;
    visited.add(curNode);

    if (now_alp >= max_alp_req && now_cop >= max_cop_req) {
      res_cost = now_cost;
      break;
    }

    problems.forEach((v) => {
      let [alp_req, cop_req, alp_rwd, cop_rwd, cost] = v;
      if (now_alp >= alp_req && now_cop >= cop_req) {
        pq.enqueue([now_alp + alp_rwd, now_cop + cop_rwd, now_cost + cost]);
      }
    });
  }
  console.log(res_cost);
  return res_cost;
}

(() => {
  //   alp = 10;
  //   cop = 10;
  //   problems = [
  //     [10, 15, 2, 1, 2],
  //     [20, 20, 3, 3, 4],
  //   ];
  (alp = 0), (cop = 0);
  problems = [
    [0, 0, 2, 1, 2],
    [4, 5, 3, 1, 2],
    [4, 11, 4, 0, 2],
    [10, 4, 0, 4, 2],
  ];
  solution(alp, cop, problems);
})();
