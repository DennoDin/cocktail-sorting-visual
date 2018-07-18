const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  let smallSort, largeSort, smallTestTarget, largeTestTarget;
  beforeEach(() => {
    largeTestTarget = [5, 12, 3, 25, 1, 7, 30, 2, 9, 10, 6, 4, 20, 15];
    smallTestTarget = [5, 1, 2];

    smallSort = new Sort(smallTestTarget);
    largeSort = new Sort(largeTestTarget);
  });

  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should sort an array from smallest to largest", () => {
    largeSort.sort();
    smallSort.sort();

    expect(largeSort.array).to.deep.equal([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      9,
      10,
      12,
      15,
      20,
      25,
      30,
    ]);
    expect(smallSort.array).to.deep.equal([1, 2, 5]);
  });

  describe("Compare", () => {
    beforeEach(() => {
      largeTestTarget = [5, 12, 3, 25, 1, 7, 30, 2, 9, 10, 6, 4, 20, 15];
      smallTestTarget = [5, 1, 2];

      smallSort = new Sort(smallTestTarget);
      largeSort = new Sort(largeTestTarget);
    });
    it("should be a function", () => {
      expect(Sort.prototype.compare).to.be.a("function");
    });
    it("should return true if the left side is larger than the right", () => {
      expect(smallSort.compare(smallSort.array[0], smallSort.array[1])).to.be
        .true;
    });

    it("should return false if the left side is smaller than the right", () => {
      expect(smallSort.compare(smallSort.array[1], smallSort.array[2])).to.be
        .false;
    });
  });
});
