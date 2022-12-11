// https://stackoverflow.com/questions/42919469/efficient-way-to-implement-priority-queue-in-javascript#comment124643780_60150529

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
    // return Math.floor((idx - 1) / 2);
    return ((idx + 1) >>> 1) - 1;
  };
  leftIndex = (idx) => {
    // return idx * 2 + 1;
    return (idx << 1) + 1;
  };
  rightIndex = (idx) => {
    // return idx * 2 + 2;
    return (idx + 1) << 1;
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
  pq.enqueue({ str: 3, val: 5 });
  pq.enqueue({ str: 2, val: 5 });
  pq.enqueue({ str: 2, val: 3 });
  pq.enqueue({ str: 3, val: 8 });
  pq.enqueue({ str: 4, val: 20 });
  /* Insert */
  let str = "";
  pq.heap.forEach((v) => (str += JSON.stringify(v) + "\t"));
  console.log(str);
  /* remove */
  while (!pq.isEmpty()) {
    console.log(pq.dequeue());
  }
  let pq2 = new PriorityQueue();
  pq2.enqueue(1);
  pq2.enqueue(3);
  pq2.enqueue(2);
  pq2.enqueue(4);
  pq2.enqueue(-100);
  /* remove2 */
  while (!pq2.isEmpty()) {
    console.log(pq2.dequeue());
  }
})();

// {"str":2,"val":3}       {"str":3,"val":5}
// {"str":2,"val":5}       {"str":3,"val":8}    {"str":4,"val":20}
/*
  { str: 2, val: 3 }
  { str: 2, val: 5 }
  { str: 3, val: 5 }
  { str: 3, val: 8 }
  { str: 4, val: 20 }
  4
  3
  2
  1
  -100
*/
