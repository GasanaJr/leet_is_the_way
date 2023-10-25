class Listnode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insertion Methods

    insertAtBeginning(value) {
        const node = new Listnode(value);
        node.next = this.head;
        this.head = node;
    }

    insertAtEnd(value) {
        const node = new Listnode(value);
        if (!this.head) {
            this.head = node;
            return;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next
            }
            current.next = node;
        }
    }

    // Deletion Methods
    deleteAtBeginning() {
        if (!this.head) return;
        this.head = this.head.next;
        return;
    }

    deleteAtEnd() {
        if (!this.head) return;
        if (!this.head.next) this.head = null;

        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    deleteByValue(value) {
        if(!this.head) return;
        if(this.head.value == value){ 
            this.head = this.head.next;
            return;
        };
        let current = this.head;
        while(current.next && current.next.value != value) {
            current = current.next;
        } 
        if (current.next) {
            current.next = current.next.next;
        }
    }

    // Search
    searchByValue(value) {
        if (!this.head) return;
        if(this.head.value == value) {
            return this.head;
        }
        let current = this.head;
        while(current.next && current.next.value !=value) {
            current = current.next; 
        }

        if (current.next) {
            return current.next
        }else {
            return "Not found"
        }
    }

    // Sum of nodes

    sumOfNodes() {
        let current = this.head;
        let sum = 0
        while (current != null) {
            sum += current.value;
            current = current.next;
        }

        return sum;
    }
}

const l1 = new LinkedList();
l1.insertAtBeginning(5);
l1.insertAtBeginning(6);
l1.insertAtEnd(7);
// l1.deleteAtBeginning();
// console.log(l1.searchByValue(0));
console.log(l1.sumOfNodes())
console.log(JSON.stringify(l1, null, 2));