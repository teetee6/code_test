// https://stackoverflow.com/questions/42919469/efficient-way-to-implement-priority-queue-in-javascript#comment124643780_60150529

const top = 0;
const parent = (i) => ((i + 1) >>> 1) - 1;
const left = (i) => (i << 1) + 1;
const right = (i) => (i + 1) << 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
  peek() {
    return this._heap[top];
  }
  push(...values) {
    values.forEach((value) => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top) {
      this._swap(top, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  replace(value) {
    const replacedValue = this.peek();
    this._heap[top] = value;
    this._siftDown();
    return replacedValue;
  }
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild =
        right(node) < this.size() && this._greater(right(node), left(node))
          ? right(node)
          : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
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
  pq._heap.forEach((v) => (str += JSON.stringify(v) + "\t"));
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
