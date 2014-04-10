var $ = require('jquery');

rotate = function(id, angle) {
  new jQueryImage(id).rotate(angle);
}

jQueryImage = function(id) {
  this.id = "#" + id;
};

jQueryImage.prototype.rotate = function(angle) {
  $(this.id).css("transform", "rotate(90deg)");
};






CompassRotatedByValue = function( selector ) {
  this.cardinalPoints = [
    [0,     "North"], 
    [22.5,  "North Northwest"],
    [45,    "Northwest"],
    [67.5,  "West Northwest"],
    [90,    "West"],
    [112.5, "West Southwest"],
    [135,   "Southwest"],
    [157.5, "South Southwest"],
    [180,   "South"],
    [202.5, "South Southeast"],
    [225,   "Southeast"],
    [247.5, "East Southeast"],
    [270,   "East"],
    [292.5, "East Northeast"],
    [315,   "Northeast"],
    [337.5, "North Northeast"]
  ];

  this.ValueToDegreeRatio = 4;
  this.selector = selector;
};

CompassRotatedByValue.prototype = {
  convertAngleToCardinalPoint: function(angle) {
    while(angle > 360) {
      angle -= 360;
    }
    
    for(var i = 0; i < this.cardinalPoints.length; i++) {
      if(this.cardinalPoints[i][0] == angle) {
        return this.cardinalPoints[i][1];
      }
    }

    return angle + "°";
  },

  convertValueToDegree: function(value) {
    return value/this.ValueToDegreeRatio + "deg";
  },

  rotateByValue: function(value) {
    var degree = this.convertValueToDegree(value);
    this._getElement.css("transform", "rotate(" + degree + ")");
  },

  _getElement: function() {
    return $(this.selector);
  }
};




var $image = $(new Image());
$image
  .load(function() {
    $('#compass').append($image);
    $image.attr('width', '500');
  })
  .attr('src', '/img/compass.png');
