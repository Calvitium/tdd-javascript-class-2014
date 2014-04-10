
describe("Compass - ", function() {


  it("the testing framework should work properly", function() {
    expect(true).toEqual(true);
  });

  it("should rotate by a given angle", function() {
    spyOn(jQueryImage.prototype, "rotate");

    rotate("compass", 90);

    expect(jQueryImage.prototype.rotate).toHaveBeenCalledWith(90);
  });

});
