/**
 * This shows the class implementation of sets
 * Methods are:
 * add: To add an element to the set
 * has: To check if an element exists in the set
 * size: To check the length of the set
 * remove: To remove an element from the set
 * values: To view all the values in the set
 * intersection: This returns the intersection of two sets
 * union: This returns the union of two sets
 * difference: This returns the difference between two sets
 * subset: To check if a given set is a subset of the other
 */

class MySet {
  collection: Array<number | string>
  constructor() {
    this.collection = [];
  }

  has(element: number | string) {
    return this.collection.indexOf(element) !== -1;
  }

  values() {
    return this.collection;
  }

  size() {
    return this.collection.length;
  }

  add(element: number | string) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  remove(element: number | string) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  union(otherSet: MySet) {
    var unionSet = new MySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach((value) => {
      unionSet.add(value);
    });
    secondSet.forEach((value) => {
      unionSet.add(value);
    });

    return unionSet.values();
  }

  intersection(otherSet: MySet) {
    var intersectionSet = new MySet();
    var firstSet = this.values();
    firstSet.forEach((value) => {
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet.values();
  }

  difference(otherSet: MySet) {
    var differenceSet = new MySet();
    var firstSet = this.values();
    firstSet.forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet.values();
  }

  subset(otherSet: MySet) {
    var firstSet = this.values();
    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  }
}

const setOne = new MySet()
const setTwo = new MySet()

setOne.add(1);
setOne.add(2);
setOne.add("a");
setOne.add("b");
setTwo.add(1);
setTwo.add(3);
setTwo.add("a");
setTwo.add("d");

console.log(setOne.union(setTwo));
console.log(setOne.intersection(setTwo));
console.log(setOne.difference(setTwo));
