const Cat = require("../../src/cat");

describe("Cat", function() {
  it("new Cat('Mittens') === { 'name': 'Mittens' }", function() {
    const cat = new Cat("Mittens");
    
    expect(cat).to.have.property("name");
    expect(cat.name).to.equal("Mittens");
  })
  it("typeof cat.meow === 'function'", function() {
    const cat = new Cat();
    
    expect(cat.meow).to.be.a("function");
  })
})