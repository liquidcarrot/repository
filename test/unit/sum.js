const sum = require("../../src/index.js");

describe("sum()", function() {
  it("sum(1, 2, 3, 4, 5) === 15", function() {
    expect(sum(1, 2, 3, 4, 5)).to.equal(15);
  })
  it("sum([1, 3, 5, 7, 9]) === 25", function () {
    expect(sum([1, 3, 5, 7, 9])).to.equal(25);
  })
  it("sum() === 0", function() {
    expect(sum()).to.equal(0);
  })
})