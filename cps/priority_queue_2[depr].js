// referenced from https://jun-choi-4928.medium.com/javascript%EB%A1%9C-heap-priority-queue-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-8bc13bf095d9
/* key값이 우선순위임(낮을수록 높다)(1등, 2등) */

class PriorityQueue {
  heap;
  comp;
  constructor(
    comp = function (a, b) {
      return a.key > b.key;
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
  enqueue(key) {
    this.heap.push({ key });
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    const lastNode = this.heap[index];
    while (index > 0) {
      const pIndex = this.getParentIndex(index);
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
      if (this.comp(this.heap[cIndex], rootNode)) {
        this.heap[index] = this.heap[cIndex];
        index = cIndex;
      } else break;
    }
    this.heap[index] = rootNode;
  }
}

(function main() {
  //   let comp = (a, b) => {
  //     return a.key < b.key;
  //   };

  let pq = new PriorityQueue();
  pq.enqueue(3);
  pq.enqueue(2);
  pq.enqueue(4);
  console.log(pq.dequeue());
  console.log(pq.dequeue());
  console.log(pq.dequeue());
})();
