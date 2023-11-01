/**
 * The Queue Data Structure also know as the FIFO
 * It has methods which include
 * enqueue: To add an element to the queue
 * dequeue: To remove an element from the queue
 * front: This returns the first element of the queue
 * size: This returns the length of the queue
 * isEmpty: This checks if the queue is empty
 */
function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (value) {
    collection.push(value);
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

  this.isEmpty = function () {
    return collection.length == 0;
  };
}
