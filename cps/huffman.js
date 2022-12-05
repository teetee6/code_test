/* huffman coding algorithm 
    rChild(제일 낮은 빈도수) - lChild - parent(제일 높은 빈도수) 순으로 오름차순이다
    엔트로피 부호화하는 무손실 압축 알고리즘
    실제로 보면, 빈도가 큰 A같은 경우 00으로 짧은비트로 압축시켜 낭비를 줄이고
    빈도가 작은 D같은 경우 01001로 엔트로피가 높은(불확실성이 크다는 의미) 비트로 압축시켜 낭비를 줄인다
*/
const PriorityQueue = require("./priority_queue");

(function main() {
  class Node {
    chr;
    frequency;
    left;
    right;
    constructor(chr, frequency, left = null, right = null) {
      this.chr = chr;
      this.frequency = frequency;
      this.left = left;
      this.right = right;
    }
    static compare(a, b) {
      if (a.frequency != b.frequency) return a.frequency < b.frequency;
      return false;
    }
  }

  let dict = new Map();
  let str = "AAAAAAABBCCCDEEEEFFFFFFG";
  for (let char of str) {
    dict.has(char) ? dict.set(char, dict.get(char) + 1) : dict.set(char, 1);
  }
  console.log(dict);
  let pq = new PriorityQueue(Node.compare);
  [...dict.keys()].map((char) => {
    let node = new Node(char, dict.get(char));
    pq.enqueue(node);
  });
  //   console.log(pq.dequeue());
  //   console.log(pq.dequeue());
  //   console.log(pq.dequeue());
  //   console.log(pq.dequeue());
  //   console.log(pq.dequeue());
  //   console.log(pq.dequeue());
  //   console.log(pq.dequeue());
  const root = huffman(pq.heap.length);
  let charToCode = new Map();
  traversal(root, "");
  let result = "";
  for (let char of str) {
    result += charToCode.get(char) + " ";
  }
  console.log(result);

  function huffman(n) {
    while (--n) {
      // for (let i = 1; i <= n - 1; ++i) {
      let x = pq.dequeue();
      let y = pq.dequeue();
      let z = new Node(null, x.frequency + y.frequency, y, x);
      pq.enqueue(z);
    }
    return pq.dequeue();
  }
  function traversal(node, str) {
    if (node === null) return;
    traversal(node.left, str + "0");
    traversal(node.right, str + "1");
    if (node.chr !== null) {
      console.log(node.chr, ": ", str);
      charToCode.set(node.chr, str); // charToCode = {A: "00", B: "01", C: "10", D: "110", E: "1110", F: "1111", G: "1112"}
    }
  }
})();
