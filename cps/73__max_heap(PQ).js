// referenced from https://jun-choi-4928.medium.com/javascript%EB%A1%9C-heap-priority-queue-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-8bc13bf095d9
// {key, value}와 {key} 두개 혼용하게 해놨음
/* key값이 우선순위임(낮을수록 높다)(1등, 2등) */

    /* Synopsis
class Heap {
    constructor() {}
    getLeftChildIndex;
    getRightChildIndex;
    getParentIndex;
    peek;
    insert;
    heapifyUp;
    remove;
    heapifyDown;
}
class PriorityQueue extends Heap {
    constructor() {}
    isEmpty;
    enqueue;
    dequeue;
}
    */

class Heap {
    constructor() {
        this.heap = []
    }

    getLeftChildIndex = (pIndex) => pIndex * 2 + 1
    getRightChildIndex = (pIndex) => pIndex * 2 + 2
    getParentIndex = childIndex => Math.floor((childIndex -1) / 2)

    peek = () => this.heap[0]

    insert = (key, value) => {
				const node = typeof value !== "undefined" ? {key, value} : {key};
        //const node = {key, value}
        this.heap.push(node)
        this.heapifyUp()
    }

		/*
		insert = (key) => {
        const node = {key}
        this.heap.push(node)
        this.heapifyUp()
    }
		*/

		// 올라갈때 우선순위 같으면 거기서 stop!
    heapifyUp = () => {
        let index = this.heap.length - 1 // swappable_child_index란 명칭이 더 잘 어울린다!
        const lastInsertedNode = this.heap[index]

        while (index > 0) {
            const parentIndex = this.getParentIndex(index)
            
            if (this.heap[parentIndex].key > lastInsertedNode.key) {
                this.heap[index] = this.heap[parentIndex]
                index = parentIndex
            }
            else
                break;
        }

        this.heap[index] = lastInsertedNode
    }

    remove = () => {
        const count = this.heap.length
        const rootNode = this.heap[0]

        if (count <= 0) return undefined
        if (count === 1) this.heap = []
        else {
            this.heap[0] = this.heap.pop() // 루트노드 = 맨 꼬리값(기존루트값 사라짐)
            this.heapifyDown()
        }

        return rootNode
    }

		// 내려갈때 우선순위가 같으면 계속 교체하며 내려간다(최대한 내려감)
    heapifyDown = () => {
        let index = 0
        const count = this.heap.length
        const rootNode = this.heap[index]

				//index == count되는 순간 범위 벗어난것임
        while (this.getLeftChildIndex(index) < count) {
            const leftChildIndex = this.getLeftChildIndex(index)
            const rightChildIndex = this.getRightChildIndex(index)

						//낮을수록 우선순위 높다. 교체후보는 우선순위 높은게 위로 올라와야 한다
            const smallerChildIndex =
                rightChildIndex < count && this.heap[rightChildIndex].key < this.heap[leftChildIndex].key ? 
                rightChildIndex : leftChildIndex

            if (this.heap[smallerChildIndex].key <= rootNode.key) {
                this.heap[index] = this.heap[smallerChildIndex]
                index = smallerChildIndex
            }
            else
                break;
        }

        this.heap[index] = rootNode
    }
}

class PriorityQueue extends Heap {
    constructor() {
        super()
    }

    enqueue = (priority, value) => this.insert(priority, value)
		enqueue = (key) => this.insert(key)
    dequeue = () => this.remove()
    isEmpty = () => this.heap.length <= 0
}