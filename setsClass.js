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
  constructor() {
    this.collection = [];
  }

  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  values() {
    return this.collection;
  }

  size() {
    return this.collection.length;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  union(otherSet) {
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

  intersection(otherSet) {
    var intersectionSet = new MySet();
    var firstSet = this.values();
    firstSet.forEach((value) => {
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet.values();
  }

  difference(otherSet) {
    var differenceSet = new MySet();
    var firstSet = this.values();
    firstSet.forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet.values();
  }

  subset(otherSet) {
    var firstSet = this.values();
    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  }
}
