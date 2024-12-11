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

}


const list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");

console.log(list.pop())


// console.log(list.head)
// console.log(list.head.next);
// console.log(list.head.next.next);
// console.log(list.head.next.next.next);

// head => Node { val: 1, next: null }
// tail => Node { val: 1, next: this.head => Node {val: 1, next: null }}

// tail => Node { val: 1, next: Node { val: 2, next: null }}
// head => Node: { val: 1, next: Node { val: 2, next: null}}

// tail => Node {val: 1, next: Node { val: 2, next: null }}