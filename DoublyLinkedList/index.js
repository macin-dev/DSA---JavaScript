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

  unshift(val) {
    // create a new node with the value passed to tge function
    const node = new Node(val);
    // if length is 0 set the head and the tail to be the new node
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      // otherwise, set the prev property on the head of the list to be the new node
      this.head.prev = node;
      // set the next property on the new node to be the head property
      node.next = this.head;
      // update the head to be the new node
      this.head = node;
    }
    // increment the length
    this.length++;
    // return the list
    return this;
  }

  get(index) {
    const middle = Math.floor(this.length / 2);
    // if the index is less than 0 or greater or equal to the length, return null
    if (index < 0 || index >= this.length) return null;
    // if the index is less than or equal to half the length of the list
    // loop through the list starting from the head and loop towards the middle
    // return the node once it is found
    let counter, node;

    if (index <= middle) {
      node = this.head;
      counter = 0;
      while (counter !== index) {
        node = node.next;
        counter++;
      }
    } else {
      // if the index is greater than half the length of the list
      // loop throughthe list starting from the tail and loop towards the middle
      // returnthe node once it is found
      node = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        node = node.prev;
        counter--;
      }
    }
    return node;
  }

  set(index, value) {
    // create a variable which is the result of the get method at the index
    // passed to the function
    const foundNode = this.get(index);
    // if the get method returns a valid node, set the value of that node to be
    // the value passed to the function
    // return true
    // othwerwise false
    if (!foundNode) return false;
    foundNode.val = value;
    return true;
  }

  insert(index, value) {
    // create a new Node
    const newNode = new Node(value);
    // if the index is less than zero or greater than or equal to the
    // length return false
    if (index < 0 || index >= this.length) return false;
    // if the index is 0, unshift
    if (index === 0) return !!this.unshift(value);
    // if the index is the same as the length, push
    if (index === this.length - 1) return !!this.push(value);
    // use the get method to access the index -1
    // set the next and prev properties on the correct nodes to link
    // everything together
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    // increment the length
    this.length++;
    // return true
    return true;
  }
}

let newList = new DoublyLinkedList();
newList.push("5");
newList.push("100");
newList.push("200"); // foundNode(100) <- newNode("harry") -> foundNode.next(200)
newList.push(900); //   foundNode(100) -> newNoode("Harry") <- foundNode.prev
newList.push(1000);
console.log(newList.insert(4, "Harry"));
console.log(newList);
