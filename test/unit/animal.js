const Animal = require("../../src/animal");

describe("Animal", function() {
  it("new Animal('Big Foot') === { 'name': 'Big Foot' }", function() {
    const animal = new Animal("Big Foot");
    
    expect(animal).to.have.property("name");
    expect(animal.name).to.equal("Big Foot");
  })
})