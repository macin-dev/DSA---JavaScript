class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // method
    // this function should accept a value
    push(val){
        // create a new node using the value passed to the function
        // if there is no head property on the list, set the head and the
        // tail to be the newly created one
        if(this.head === null){
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

    pop(){
        // If there are no nodes in the list, return undefined
        if(!this.length) return undefined;

        // track the 2nd node to the last tail
        // track the tail
        let pre  = this.head;
        let lastNode = this.head.next;

        // Loop through the list until you reach the tail
        while(lastNode.next){
            pre = pre.next;
            lastNode = lastNode.next;
            console.log({ pre, lastNode})
        }

        // set the next property of the 2nd to last node to be null
        pre.next = null;
        // set the tail to be the 2nd to last node
        this.tail = pre;
        // decrement the length of te list by 1
        this.length--;
        return lastNode;
    }

    shift(){
        // If there are no nodes, return undefined
        if(!this.head) return undefined;
        // Store the current head property in a variable
        let currentHead = this.head;
        // Set the head property to be the current head's next property
        this.head = currentHead.next
        // Decrement the length by 1
        this.length--;
        if(!this.length) this.tail = null;
        // Return the value of the node removed
        currentHead.next = null;
        return currentHead;
    }

    // This function should accept a value
    unshift(val){
        // Create a new node using the value passed to the function
        const newNode = new Node(val);
        // If there is no head property on the list, set the head and the tail
        // to be the newly created one
        if(!this.head){
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
    get(index){
        // If the index is less than zero o greater than or equal to
        // the length of the list, return null
        if(index < 0 || index >= this.length) return null;

        // Loop through the list until you reach the index and return
        // the node at that specific index
        let currentNode = this.head;
        let count = 0;

        while(currentNode){
            if(count === index) return currentNode;
            currentNode = currentNode.next;
            count++;
        }
    }

    // Set Method
    // This function should accept a value and an index
    set(index, value){
        // Use your get function to find the specific node
        // If the node is not found, return false
        let foundNode = this.get(index);
        if(!foundNode) return false;
        // If the node is found, set the value of the node to be the value
        // passed to the function and return true
        foundNode.val = value;
        return true;
    }
}


const list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");

console.log(list.set(2, "Pikachu"));
console.log(list.head.next)