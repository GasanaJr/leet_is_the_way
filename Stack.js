/**
 * Class to represent a Stack in action
 */

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  // Adds an item to the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  // Removes an item from the stack and returns it
  pop() {
    if (this.count == 0) return undefined;
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  // Size of the stack
  length() {
    return this.count;
  }

  // Return the first item
  peek() {
    return this.storage[this.count - 1];
  }

  // View All Items
  viewAll() {
    return this.storage;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.viewAll());
