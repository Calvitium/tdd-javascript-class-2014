// var $ = require('jquery');

console.log($);

var $image = $(new CustomImage());
$image
  .load(function() {
    $('#compassImage').append($image);
    $image.attr('width', '500');
  })
  .attr('src', '/img/compass.png');



//=== Image
var CustomImage = function() {

};