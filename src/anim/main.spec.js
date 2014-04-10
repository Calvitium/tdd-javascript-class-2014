
describe("Compass - ", function() {


  it("the testing framework should work properly", function() {
    expect(true).toEqual(true);
  });

  it("function rotate should call jQueryImage.rotate and pass the angle", 
    function() {
    spyOn(jQueryImage.prototype, "rotate");

    rotate("compass", 90);

    expect(jQueryImage.prototype.rotate).toHaveBeenCalledWith(90);
  });

  describe("angle to direction (text)", function() {
    it("should convert 0 to North", function() {
      expect(convertAngleToCardinalPoint(0)).toEqual("North");
    });

  });


});
