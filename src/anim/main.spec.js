
describe("Compass - ", function() {

  beforeEach( function() {
    this.compass = new Compass("compass");
  })

  it("the testing framework should work properly", function() {
    expect(true).toEqual(true);
  });

  it("should be an instance of Compass", function() {
    expect(this.compass).toEqual(jasmine.any(Compass));
  });

  it("the constructor should set the id for a compass image", function() {
    expect(this.compass.id).toEqual("#compass");
  });

});
