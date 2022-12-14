// const PriorityQueue = require("./priority_queue");
const PriorityQueue = require("./pq");

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
  let str = "";
  pq.heap.forEach((v) => (str += JSON.stringify(v) + "\t"));
  console.log(str);
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

// (function main() {
//   class Elem {
//     constructor(key, value) {
//       this.key = key;
//       this.value = value;
//     }

//     static compare(a, b) {
//       if (a.key != b.key) return a.key < b.key;
//       else if (a.value != b.value) return a.value < b.value;
//       return false;
//     }
//   }

//   let pq = new PriorityQueue(Elem.compare);
//   pq.enqueue(new Elem(1, 1));
//   pq.enqueue(new Elem(2, 3));
//   pq.enqueue(new Elem(2, 2));
//   pq.enqueue(new Elem(1, 4));
//   // let pq = new PriorityQueue();
//   // pq.enqueue(1);
//   // pq.enqueue(3);
//   // pq.enqueue(2);
//   // pq.enqueue(4);
//   console.log(pq.dequeue());
//   console.log(pq.dequeue());
//   console.log(pq.dequeue());
//   console.log(pq.dequeue());
// })();
