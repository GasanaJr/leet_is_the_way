/**
 * This is a special type of queue which contains also priorities of the items in it
 */

function PriorityQueue() {
  var collection = [];
  this.printCollection = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.isEmpty = function () {
    return collection.length == 0;
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };
}

var pq = new PriorityQueue();
pq.enqueue(["Junior", 1]);
pq.enqueue(["Didas", 2]);
pq.enqueue(["Gasana", 4]);
pq.enqueue(["DJ", 3]);
pq.printCollection();
