// const PriorityQueue = require("./priority_queue");
const PriorityQueue = require("./pq");

(() => {
  class Elem {
    constructor(str, val) {
      this.str = str;
      this.val = val;
    }
    static comparator(a, b) {
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
  console.log(pq.dequeue());
  console.log(pq.dequeue());
  console.log(pq.dequeue());
  console.log(pq.dequeue());
  console.log(pq.dequeue());
  let pq2 = new PriorityQueue();
  pq2.enqueue(1);
  pq2.enqueue(3);
  pq2.enqueue(2);
  pq2.enqueue(4);
  pq2.enqueue(-100);
  console.log(pq2.dequeue());
  console.log(pq2.dequeue());
  console.log(pq2.dequeue());
  console.log(pq2.dequeue());
  console.log(pq2.dequeue());
})();
