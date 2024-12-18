class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // method
    // this function should accept a value
    push(val) {
        // create a new node using the value passed to the function
        // if there is no head property on the list, set the head and the
        // tail to be the newly created one
        if (this.head === null) {
            this.head = new Node(val);
            this.tail = this.head; // { val: "1", next: null }
        } else {
            this.tail.next = new Node(val);
            this.tail = this.tail.next;
            // otherwise, set the next property on the tail to be
            // the new node and set the tail property on the list
            // to be the newly created one
        }
        this.length++;
        return this;
    }

    pop() {
        // If there are no nodes in the list, return undefined
        if (!this.length) return undefined;

        // track the 2nd node to the last tail
        // track the tail
        let current = this.head;
        let newTail = current;

        // Loop through the list until you reach the tail
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        // set the next property of the 2nd to last node to be null
        newTail.next = null;
        // set the tail to be the 2nd to last node
        this.tail = newTail;
        // decrement the length of te list by 1
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        // If there are no nodes, return undefined
        if (!this.head) return undefined;
        // Store the current head property in a variable
        let currentHead = this.head;
        // Set the head property to be the current head's next property
        this.head = currentHead.next
        // Decrement the length by 1
        this.length--;
        if (!this.length) this.tail = null;
        // Return the value of the node removed
        currentHead.next = null;
        return currentHead;
    }

    // This function should accept a value
    unshift(val) {
        // Create a new node using the value passed to the function
        const newNode = new Node(val);
        // If there is no head property on the list, set the head and the tail
        // to be the newly created one
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // Otherwise set the newly created node's next property to be the current head property
            // on the list
            newNode.next = this.head;
            // Set the head property on the list to be that newly created node
            this.head = newNode;
        }

        // Increment the length of the list by 1
        this.length++;
        // return the linked list
        return this;
    }

    // Get Method
    // This function should accept an index
    get(index) {
        // If the index is less than zero o greater than or equal to
        // the length of the list, return null
        if (index < 0 || index >= this.length) return null;

        // Loop through the list until you reach the index and return
        // the node at that specific index
        let currentNode = this.head;
        let count = 0;

        while (currentNode) {
            if (count === index) return currentNode;
            currentNode = currentNode.next;
            count++;
        }
    }

    // Set Method
    // This function should accept a value and an index
    set(index, value) {
        // Use your get function to find the specific node
        // If the node is not found, return false
        let foundNode = this.get(index);
        if (!foundNode) return false;
        // If the node is found, set the value of the node to be the value
        // passed to the function and return true
        foundNode.val = value;
        return true;
    }

    insert(index, value) {
        // Create a new Node
        const newNode = new Node(value);
        // If the index is less than zero or greater than the length, return false,
        if (index < 0 || index > this.length) return false
        // If the index is the same as the length, push a new node to the end of the list
        if (index === this.length) return !!this.push(value)
        // If the index is 0, unshift a new node to the start of the list
        if (index === 0) return !!this.unshift(value);
        // Otherwise, using the get method, access the node at the index -1
        const nodeFound = this.get(index - 1);
        const prevNode = nodeFound.next;
        // Set the next property on that node to be the new node
        nodeFound.next = newNode;
        // Set the next property on the new node to be the previous next
        newNode.next = prevNode;
        // Increment the length
        this.length++;
        // return true
        return true;
    }

    remove(index) {
        // if the index is less than zero or greater than the length, return undefined
        if (index < 0 || index >= this.length) return undefined;
        // If the index is the same as the length - 1, pop
        if (index === this.length - 1) return this.pop();
        // If the index is 0, shift
        if (index === 0) return this.shift()
        // Otherwise, using the get method, access the node at the index - 1
        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;
        // Set the next property on that node to be the next of the next node
        prevNode.next = removedNode.next;
        // Decrement the length
        this.length--;
        // Return the value of the node removed
        return removedNode;
    }

    traverse() {
        // Swap the head and the tail
        const head = this.head;
        this.head = this.tail;
        this.tail = head;
        // Create a variable called next
        let nextNode = null
        // Create a variable called prev
        let prevNode = null;
        // Create a variable called node and initialize it to the head property
        let currentNode = head;
        // Loop through the list
        while(currentNode !== null) {
            // Set next to be the next property on whatever node is
            // Set the next property on the node to be whatever prev is
            // Set prev to be the value of the node variable
            // Set the node variable to be the value of the next variable
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        return this;
    }
}


const list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list)