// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height; 
var width; 
var color; 
var canvas; 

function makeGrid() {
  const grid = document.getElementById("pixelCanvas");
  const getRows = document.getElementById("inputHeight");
  const getCols = document.getElementById("inputWidth");

  grid.innerHTML = '';

 for (var i = 0, i < getRows, i++) {
  var tableRow = grid.insertRow(0);

 for (var x = 0, x < getCols, x++) {
  var tableData = tableRow.insertCell(0);
  tableData.setAttribute("cell", x + 1 + ", " + (i+1));
};

  tableData.addEventListener("click", function(event){
    var colorPicker = document.getElementById("colorPicker").value;
    this.style.backgroundColor = colorPicker;
    event.preventDefault();
  });

  const button = document.getElementById("submit");
  button.addEventListener("click", function(event){
    event.preventDefault();  
    makeGrid();

  });
