var $ = require('jquery');


CompassRotatedByValue = function( selector, textSelector ) {
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
  this.textSelector = textSelector;
  this.rotateByValue(0);
};

CompassRotatedByValue.prototype = {
  convertAngleToCardinalPoint: function(angle) {
    while(angle >= 360) {
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
    var degree = value/this.ValueToDegreeRatio;

    degree = Math.round( degree*2 )
    degree /= 2
    degree.toFixed(1); 

    return degree;
  },

  rotateByValue: function(value) {
    var degree = this.convertValueToDegree(value);
    var directionText = this.convertAngleToCardinalPoint(degree);
    this._rotate(degree);
    this._setDirectionText(directionText);
  },

  _rotate: function(degree) {
    $(this.selector).css("transform", "rotate(" + degree + "deg)");
  },
  _setDirectionText: function(directionText) {
    $(this.textSelector).html(directionText);
  }
};




var $image = $(new Image());
$image
  .load(function() {
    $('#compassImage').append($image);
    $image.attr('width', '500');
  })
  .attr('src', '/img/compass.png');

$(function() {
  comp = new CompassRotatedByValue( "#compassImage", "#directionHeading" );

  window.onscroll = function() {
    comp.rotateByValue( $(window).scrollTop() );
  }
});