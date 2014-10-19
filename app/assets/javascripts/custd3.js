function resetRowCols(){
  var emptyImage = $("#empty_image img");
  // Create new offscreen image to test
  var imageSpecs;
  var offsetImage = new Image();
  offsetImage.src = emptyImage.attr("src");
  //
  // Get accurate measurements from that.
  offsetImage.onload = function(imageSpecs){
    imageWidth = offsetImage.width;
    imageHeight = offsetImage.height;
    var topOfImage = emptyImage.position().top;
    var leftOfImage = emptyImage.position().left;
    var numberRows = $("#location_number_rows").val()
    var numberCols = $("#location_number_cols").val()
    console.log("image pos: " + topOfImage + ", " + leftOfImage);
    console.log("r: " + numberRows);
    console.log("c: " + numberCols);
    console.log("image height: " + imageHeight);
    console.log("image width: " + imageWidth);
    var imageDetails = new Array(numberRows);
    for(var i = 0; i<numberRows; i++){
      imageDetails[i] = new Array(numberCols);
      for(var j = 0; j<numberCols; j++){
        imageDetails[i][j]= false;
        //imageDetails[i][j].order = -1;
      }
    }
    var countUsed = 0;
   //Make an SVG Container
     var svgContainer = d3.select("#emptyImage").append("svg")
                                         .attr("x", leftOfImage)
                                         .attr("y", topOfImage)
                                         .attr("width", 200)
                                         .attr("height", 200);
     
     //Draw the Rectangle
     var rectangle = svgContainer.append("rect")
                                 .attr("x", leftOfImage)
                                 .attr("y", topOfImage)
                                .attr("width", 10)
                                .attr("height", imageHeight); 
             
  }
}
$(document).ready(function(){
  resetRowCols();
    $('img').click(function(e) {
      var numberRows = $("#location_number_rows").val()
      var numberCols = $("#location_number_cols").val()
      var offset = $(this).offset();
      var xCoor = e.clientX - offset.left;
      var yCoor = e.clientY - offset.left;
      var xBox = Math.floor(xCoor/(imageWidth/numberCols));
      var yBox = Math.floor(yCoor/(imageHeight/numberRows));
      alert("left click - [" + xBox + ", " + yBox + "]");
    });
    $(document).on("contextmenu", "img", function(e){
      var numberRows = $("#location_number_rows").val()
      var numberCols = $("#location_number_cols").val()
      var offset = $(this).offset();
      var xCoor = e.clientX - offset.left;
      var yCoor = e.clientY - offset.left;
      var xBox = Math.floor(xCoor/(imageWidth/numberCols));
      var yBox = Math.floor(yCoor/(imageHeight/numberRows));
      alert("right click - [" + xBox + ", " + yBox + "]");
      return false;
    });
  $(".addRow").click(function(){
    var numberRows = $("#location_number_rows").val()
    $("#location_number_rows").val(parseInt(numberRows) + 1)
    resetRowCols();
  });
  $(".minusRow").click(function(){
    var numberRows = $("#location_number_rows").val()
    $("#location_number_rows").val(parseInt(numberRows) - 1)
    resetRowCols();
  });
  $(".addCol").click(function(){
    var numberCols = $("#location_number_cols").val()
    $("#location_number_cols").val(parseInt(numberCols) + 1)
    resetRowCols();
  });
  $(".minusCol").click(function(){
    var numberCols = $("#location_number_cols").val()
    $("#location_number_cols").val(parseInt(numberCols) - 1)
    resetRowCols();

  });
});
