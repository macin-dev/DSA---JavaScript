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

  // pop method
  pop() {
    // if there is no head,return undefined
    if (!this.head) return undefined;
    // sotre the current tail in a variable to return later
    const popped = this.tail;
    // if the length is 1, set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // otherwise update the tail to be the previous node
      this.tail = popped.prev;
      // set the new tail's next to null
      this.tail.next = null;
      popped.prev = null;
    }
    // decrement the length
    this.length--;
    // return the value removed
    return popped;
  }

  shift() {
    // if there is 0, return undefined
    if (!this.tail) return undefined;
    // store the current head property in a variable
    const oldHead = this.head;
    // if the length is 1, set the head and the tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // update the head to be the next of the old head
      this.head = oldHead.next;
      // set the head's prev property to null
      this.head.prev = null;
      // set the old head's next to null
      oldHead.next = null;
    }
    // decrement the length
    this.length--;
    // return old head
    return oldHead;
  }
}

let newList = new DoublyLinkedList();
newList.push("5");
newList.push("100");
newList.push("200");
console.log(newList.shift());
console.log(newList.head);
console.log(newList.shift());
console.log(newList.head);
console.log(newList.shift());
console.log(newList.shift());
