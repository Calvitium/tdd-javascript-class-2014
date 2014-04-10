
describe("Compass -", function() {


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

    it("should convert 90 to West", function() {
      expect(convertAngleToCardinalPoint(90)).toEqual("West");
    });

    it("should convert 51 to 51", function() {
      expect(convertAngleToCardinalPoint(51)).toEqual("51°");
    });

    it("should convert 382.5 to North Northwest", function() {
      expect(convertAngleToCardinalPoint(382.5)).toEqual("North Northwest");
    });

  });


});
