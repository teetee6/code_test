/*  Synopsis
class PriorityQueue {
    constructor(comp = function (a,b) {return a> b}) {}
    getLeftChildIndex;
    getRightChildIndex;
    getParentIndex;
    peek;
    isEmpty;
    enqueue;
    heapifyUp;
    dequeue;
    heapifyDown;
}
*/

class PriorityQueue {
  heap;
  comp;
  constructor(
    comp = function (a, b) {
      return a > b;
    }
  ) {
    this.heap = [];
    this.comp = comp;
  }
  getLeftChildIndex(i) {
    return i * 2 + 1;
  }
  getRightChildIndex(i) {
    return i * 2 + 2;
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  peek() {
    return this.heap[0];
  }
  isEmpty() {
    return this.heap.length <= 0;
  }
  enqueue(obj) {
    this.heap.push(obj);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    const lastNode = this.heap[index];
    while (index > 0) {
      const pIndex = this.getParentIndex(index);
      // lastNode 우선순위가 높으면 올라가라!
      if (this.comp(lastNode, this.heap[pIndex])) {
        this.heap[index] = this.heap[pIndex];
        index = pIndex;
      } else break;
    }
    this.heap[index] = lastNode;
  }
  dequeue() {
    if (this.heap.length <= 1) return this.heap.shift();
    const rootNode = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return rootNode;
  }
  heapifyDown() {
    let index = 0;
    const rootNode = this.heap[index];
    while (this.getLeftChildIndex(index) < this.heap.length) {
      const l_index = this.getLeftChildIndex(index);
      const r_index = this.getRightChildIndex(index);
      let cIndex = l_index;
      if (
        r_index < this.heap.length &&
        this.comp(this.heap[r_index], this.heap[l_index])
      )
        cIndex = r_index;
      // cIndex 우선순위가 더 높다면 올라와라! 난 더 내려간다!
      if (this.comp(this.heap[cIndex], rootNode)) {
        this.heap[index] = this.heap[cIndex];
        index = cIndex;
      } else break;
    }
    this.heap[index] = rootNode;
  }
}

module.exports = PriorityQueue;
