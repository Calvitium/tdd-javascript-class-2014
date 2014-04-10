
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

  describe("CompassRotatedByValue", function() {
    beforeEach(function() {
      this.compass = new CompassRotatedByValue( "compass" );
    });

    describe("angle to direction (text)", function() {
      it("should convert 0 to North", function() {
        expect(this.compass.convertAngleToCardinalPoint(0)).toEqual("North");
      });

      it("should convert 90 to West", function() {
        expect(this.compass.convertAngleToCardinalPoint(90)).toEqual("West");
      });

      it("should convert 51 to 51", function() {
        expect(this.compass.convertAngleToCardinalPoint(51)).toEqual("51°");
      });

      it("should convert 382.5 to North Northwest", function() {
        expect(this.compass.convertAngleToCardinalPoint(382.5)).toEqual("North Northwest");
      });

    });

    describe("pixel to angle converter", function() {
      it("should convert 4 to 1deg", function() {
        expect(this.compass.convertValueToDegree(4)).toEqual("1deg");
      });
      it("should convert 16 to 4deg", function() {
        expect(this.compass.convertValueToDegree(16)).toEqual("4deg");
      });
      it("should convert 245 to 61.25deg", function() {
        expect(this.compass.convertValueToDegree(245)).toEqual("61.25deg");
      });
    });

    it("should rotate by value", function() {
      spyOn(this.compass, "rotateByValue");

      this.compass.rotateByValue(512);

      expect(this.compass.rotateByValue).toHaveBeenCalledWith(512);
    });
  });



});
