class CocktailSort {
  constructor(array) {
    this.array = [];
    for (let idx = 0; idx < array.length; idx++) {
      this.array.push(array[idx]);
    }
    this.sortRight = true;
    this.rightItr = 0;
    this.rightLimit = this.array.length - 1;
    this.leftItr = this.rightLimit;
    this.leftLimit = 0;

    return this;
  }

  // RETURN PER STEP SORT

  stepSort() {
    if (this.leftLimit < this.rightLimit) {
      if (this.sortRight) {
        if (this.rightItr < this.rightLimit) {
          if (
            this.compare(
              this.array[this.rightItr],
              this.array[this.rightItr + 1]
            )
          ) {
            let temp = this.array[this.rightItr];
            this.array[this.rightItr] = this.array[this.rightItr + 1];
            this.array[this.rightItr + 1] = temp;
          }
        } else {
          this.rightLimit = this.rightItr - 1;
          this.leftItr = this.rightLimit;
          this.sortRight = false;
        }
        this.rightItr++;
      } else {
        if (this.leftItr > this.leftLimit) {
          if (
            this.compare(this.array[this.leftItr - 1], this.array[this.leftItr])
          ) {
            let temp = this.array[this.leftItr];
            this.array[this.leftItr] = this.array[this.leftItr - 1];
            this.array[this.leftItr - 1] = temp;
          }
        } else {
          this.leftLimit = this.leftItr + 1;
          this.rightItr = this.leftLimit;
          this.sortRight = true;
        }
        this.leftItr = this.leftItr - 1;
      }
    }
    return this.array;
  }

  // ONE RETURN COMPLETE SORT

  sort() {
    let rightLimit = this.array.length - 1;
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
