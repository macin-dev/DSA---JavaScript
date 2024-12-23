class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Push method
  push(val) {
    // 1. create a new node with the value passed to the method
    const node = new Node(val);
    // 2. if the head property is null set the head and the tail to be the
    // newly creatde node.
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      // 3. if not, set the next property on the tail to be that node
      this.tail.next = node;
      // 4. set the previous property on the newly created node to be the old tail.
      node.prev = this.tail;
      // 5. set the tail to be the newly created node
      this.tail = node;
    }

    // 6. increment the length
    this.length++;
    // 7. return the doubly linked list
    return this;
  }
}

let newList = new DoublyLinkedList();
console.log(newList.push("5"));
console.log(newList.push("100"));
console.log(newList.push("200"));
