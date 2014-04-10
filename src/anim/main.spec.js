
describe("Compass -", function() {
  it("the testing framework should work properly", function() {
    expect(true).toEqual(true);
  });
  
  describe("CompassRotatedByValue", function() {
    beforeEach(function() {
      this.compass = new CompassRotatedByValue( "#compass", "#directionHeading" );
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
      it("should convert 4 to 1", function() {
        expect(this.compass.convertValueToDegree(4)).toEqual(1);
      });
      it("should convert 16 to 4", function() {
        expect(this.compass.convertValueToDegree(16)).toEqual(4);
      });
      it("should convert 245 to 61.5 (round up)", function() {
        expect(this.compass.convertValueToDegree(245)).toEqual(61.5);
      });
      it("should convert 120.796 to 30 (round down)", function() {
        expect(this.compass.convertValueToDegree(120.796)).toEqual(30);
      });
    });

    it("should rotate by 128 when the value is 512", function() {
      spyOn(this.compass, "_rotate");

      this.compass.rotateByValue(512);

      expect(this.compass._rotate).toHaveBeenCalledWith(128);
    });
    
    it("should set text to South Southwest when value is 630", function() {
      spyOn(this.compass, "_setDirectionText");

      this.compass.rotateByValue(630);

      expect(this.compass._setDirectionText).toHaveBeenCalledWith("South Southwest");
    });
  });



});
