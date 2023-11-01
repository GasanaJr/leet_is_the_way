/**
 * Priority Queue implementation using TS and Classes
 * This implementation assumes you are storing strings
 */

class priorityQueue {
    collection: Array<[string, number]>
    constructor() {
        this.collection = [];
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return this.collection.length == 0;
    }

    dequeue() {
        return this.collection.shift();
    }

    front() {
        return this.collection[0];
    }

    enqueue(element: [string, number]) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            var added = false;
            for (var i = 0; i<this.collection.length; i++) {
                if (element[1] < this.collection[i][1]) {
                    this.collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
    }

    printCollection() {
        console.log(this.collection)
    }
}

var PQ = new priorityQueue();
PQ.enqueue(["Junior", 1]);
PQ.enqueue(["Didas", 2]);
PQ.enqueue(["Gasana", 4]);
PQ.enqueue(["DJ", 3]);
PQ.printCollection();