// 연습용입니다

class PriorityQueue {
  heap;
  comp;
  constructor(comp = (a, b) => a > b) {
    this.heap = [];
    this.comp = comp;
  }
  getLindex(i) {
    return i * 2 + 1;
  }
  getRindex(i) {
    return i * 2 + 2;
  }
  getPindex(i) {
    return Math.floor((i - 1) / 2);
  }
  enqueue(e) {
    this.heap.push(e);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    const lastNode = this.heap[index];
    while (index > 0) {
      const pIndex = this.getPindex(index);
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
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heapifyDown();
    return rootNode;
  }
  heapifyDown() {
    let index = 0;
    const rootNode = this.heap[index];
    while (this.getLindex(index) < this.heap.length) {
      let cindex = this.getLindex(index);
      let lindex = this.getLindex(index);
      let rindex = this.getRindex(index);
      if (
        this.getRindex(index) < this.heap.length &&
        this.comp(this.heap[rindex], this.heap[lindex])
      )
        cindex = rindex;
      if (this.comp(this.heap[cindex], rootNode)) {
        this.heap[index] = this.heap[cindex];
        index = cindex;
      } else break;
    }
    this.heap[index] = rootNode;
  }
}

module.exports = PriorityQueue;
