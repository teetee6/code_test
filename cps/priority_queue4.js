// https://stackoverflow.com/questions/42919469/efficient-way-to-implement-priority-queue-in-javascript#comment124643780_60150529

const top = 0;
const parent = (i) => ((i + 1) >>> 1) - 1;
const left = (i) => (i << 1) + 1;
const right = (i) => (i + 1) << 1;

class PriorityQueue {
  heap;
  comp;
  constructor(
    comp = function (a, b) {
      a > b;
    }
  ) {
    this.heap = [];
    this.comp = comp;
  }
  Parent(index) {
    return Math.floor((index - 1) / 2);
  }
  Left(index) {
    return index * 2 + 1;
  }
  Right(index) {
    return index * 2 + 2;
  }
  push(obj) {
    this.heap.push(obj);
    let index = this.heap.length - 1;
    const lastNode = this.heap[index];
    while (index > 0 && this.comp(lastNode, this.heap[this.Parent(index)])) {
      this.heap[index] = this.heap[this.Parent(index)];
      index = this.Parent(index);
    }
    this.heap[index] = lastNode;
  }
  pop() {
    if (this.heap.length <= 1) return this.heap.shift();
    const ret_node = this.heap[0];
    let index = 0;
    this.heap[index] = this.heap.pop();
    const rootNode = this.heap[0];

    let lt_idx = this.Left(index);
    let rt_idx = this.Right(index);
    while (
      lt_idx < this.heap.length &&
      this.comp(this.heap[lt_idx], this.heap[index]) //||
      // (rt_idx < this.heap.length &&
      //   this.comp(this.heap[rt_idx], this.heap[index]))
    ) {
      lt_idx = this.Left(index);
      rt_idx = this.Right(index);
      let child_idx = lt_idx;
      if (
        this.Right(index) < this.heap.length &&
        this.comp(this.heap[rt_idx], this.heap[lt_idx])
      )
        child_idx = rt_idx;
      this.heap[index] = this.heap[child_idx];
      index = child_idx;
    }
    this.heap[index] = rootNode;
    return ret_node;
  }
  isEmpty() {
    return this.heap.length == 0;
  }
}

(() => {
  class Elem {
    constructor(str, val) {
      this.str = str;
      this.val = val;
    }
    static comparator(a, b) {
      //원래 js에서 comp는 참일때 swap하므로 아래의경우, 내림차순 결과가 나오는게 직관적이긴 함....
      if (a.str != b.str) return a.str < b.str;
      else if (a.val != b.val) return a.val < b.val;
      return false;
    }
  }
  let pq = new PriorityQueue(Elem.comparator);
  pq.push({ str: 3, val: 5 });
  pq.push({ str: 2, val: 5 });
  pq.push({ str: 2, val: 3 });
  pq.push({ str: 3, val: 8 });
  pq.push({ str: 4, val: 20 });
  /* Insert */
  let str = "";
  pq.heap.forEach((v) => (str += JSON.stringify(v) + "\t"));
  console.log(str);
  /* remove */
  while (!pq.isEmpty()) {
    console.log(pq.pop());
  }
  let pq2 = new PriorityQueue();
  pq2.pop(1);
  pq2.pop(3);
  pq2.pop(2);
  pq2.pop(4);
  pq2.pop(-100);
  /* remove2 */
  while (!pq2.isEmpty()) {
    console.log(pq2.pop());
  }
})();
