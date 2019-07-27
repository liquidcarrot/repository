const Dog = require("../../src/dog");

describe("Dog", function() {
  it("new Dog('Fluffy') === { 'name': 'Fluffy' }", function() {
    const dog = new Dog("Fluffy");
    
    expect(dog).to.have.property("name");
    expect(dog.name).to.equal("Fluffy");
  })
  it("typeof dog.bark === 'function'", function() {
    const dog = new Dog();
    
    expect(dog.bark).to.be.a("function");
  })
})