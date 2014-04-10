var $ = require('jquery');

Compass = function() {
  
};



var $image = $(new Image());
$image
  .load(function() {
    $('#compassImage').append($image);
    $image.attr('width', '500');
  })
  .attr('src', '/img/compass.png');
