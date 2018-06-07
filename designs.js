var height; 
var width; 
var color; 
var canvas; 

height = $("#inputHeight");
width = $("#inputWidth");
color = $("#colorPicker");
canvas = $("#pixelCanvas");

$('form').on('submit', function (event) {
  event.preventDefault();
  
 let height = $('#inputHeight').val();
 let width = $('#inputWidth').val();
 makeGrid();

function makeGrid() {
 for (x = 1, x <=height, ++x) {
 	$(canvas.append("<tr></tr>"));
 }
 for (y = 1, y <=width, ++y) {
 	$('tr').append("<td></td>"));
 }
};
  
$('table').on('click', 'td', function () {
  let drawColor = $('#colorPicker').val();

  $(this).css('background-color', drawColor);
});
