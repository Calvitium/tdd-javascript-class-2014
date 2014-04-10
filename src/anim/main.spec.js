
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

  describe("pixel to angle converter", function() {
    it("should convert 4 pixels to 1 degree", function() {
      expect(convertPixelToDegree(4)).toEqual(1);
    });
    it("should convert 16 pixels to 4 degree", function() {
      expect(convertPixelToDegree(16)).toEqual(4);
    });
    it("should convert 245 pixels to 61.25 degree", function() {
      expect(convertPixelToDegree(245)).toEqual(61.25);
    });
  });

});
