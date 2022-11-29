const PriorityQueue = require("./priority_queue");

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
})();
