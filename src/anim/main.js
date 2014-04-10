var $ = require('jquery');

rotate = function(id, angle) {
  new jQueryImage(id).rotate(angle);
};

jQueryImage = function(id) {
  this.id = "#" + id;
};

jQueryImage.prototype.rotate = function(angle) {
  $(this.id).css("transform", "rotate(90)");
};

convertAngleToCardinalPoint = function(angle) {

  return "North";

};



var $image = $(new Image());
$image
  .load(function() {
    $('#compassImage').append($image);
    $image.attr('width', '500');
  })
  .attr('src', '/img/compass.png');
