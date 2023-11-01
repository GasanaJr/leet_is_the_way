/**
 * Sets are Data Structures that are used to store unique values
 * The codes below show the implementation of sets using functional classes
 */

function mySet() {
  var collection = [];
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  this.values = function () {
    return collection;
  };

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function (element) {
    if (this.has(element)) {
      const index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach((value) => {
      unionSet.add(value);
    });
    secondSet.forEach((value) => {
      unionSet.add(value);
    });
    return unionSet.values();
  };

  this.interSection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach((value) => {
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet.values();
  };

  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach((element) => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });
    return differenceSet.values();
  };

  this.subset = function (otherSet) {
    var subsetSet = new mySet();
    var firstSet = this.values();
    return firstSet.every((element) => {
      return otherSet.has(element);
    });
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add(1);
setA.add(2);
setA.add("a");
setA.add("b");
setB.add(1);
setB.add(3);
setB.add("a");
setB.add("d");

console.log(setA.union(setB));
console.log(setA.interSection(setB));
console.log(setA.difference(setB));
