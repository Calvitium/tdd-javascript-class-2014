var CustomImage = require("CustomImage");

describe("Compass - ", function() {

  var compassImage;

  beforeEach( function() {
    compassImage = new CustomImage();
  })

  it("the testing framework should work properly", function() {
    expect(true).toEqual(true);
  });

  it("should be an instance of CustomImage", function() {
    expect(compassImage).toEqual(jasmine.any(CustomImage));
  });

});