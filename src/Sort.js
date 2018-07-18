class CocktailSort {
  constructor(array) {
    this.array = [];
    for (let idx = 0; idx < array.length; idx++) {
      this.array.push(array[idx]);
    }
    return this;
  }
  sort() {
    let rightLimit = this.array.length;
    let rightItr = 0;
    let leftItr = 0;
    let leftLimit = 0;
    while (leftLimit <= rightLimit) {
      let count = 0;
      for (rightItr; rightItr < rightLimit; rightItr++) {
        if (this.compare(this.array[rightItr], this.array[rightItr + 1])) {
          let temp = this.array[rightItr];
          this.array[rightItr] = this.array[rightItr + 1];
          this.array[rightItr + 1] = temp;
          count++;
        }
      }
      rightLimit = rightItr - 1;
      leftItr = rightLimit;
      for (leftItr = rightLimit; leftItr > leftLimit; leftItr = leftItr - 1) {
        if (this.compare(this.array[leftItr - 1], this.array[leftItr])) {
          let temp = this.array[leftItr];
          this.array[leftItr] = this.array[leftItr - 1];
          this.array[leftItr - 1] = temp;
          count++;
        }
      }
      leftLimit = leftItr + 1;
      rightItr = leftLimit;
      if (count == 0) {
        leftLimit = rightLimit + 1;
      }
    }
  }

  compare(left, right) {
    // checks if the the left side bigger
    return left > right;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = CocktailSort;
