var $ = require('jquery');

var $image = $(new Image());
$image
  .load(function() {
    $('#compassImage').append($image);
    $image.attr('width', '500');
  })
  .attr('src', '/img/compass.png');



//=== Image