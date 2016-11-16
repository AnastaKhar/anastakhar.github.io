$(document).ready(function() { //always do this first. A special event 
  //append new element 100 times
  for (j = 0; j < 100; j++){
        for (i = 0; i < 20; i++) { 
      $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
      console.log("element " + j + ", " + i + " added");
    }
  }


  for (i = 0; i < 100; i++){
    drawRandomObject();
  }
 

function drawRandomObject(){
  //store random values between 0 to 100, to rx and ry//
  var rx = Math.floor(Math.random()*100);
  var ry = Math.floor(Math.random()*100);
  //var rw = Math.floor(Math.random()*100); //random width
  //var rh = Math.floor(Math.random()*100); //random height
  var color = "black"
  if (ry < 50) {
    //ry is smaller than 50 = above the half - then yellow
    color = 'black';
  }
  
  else {
    color = "black";
  }
  console.log("rx:" + rx + " ry; " + ry)

  $("body").append( "<div class='element random' style = 'left:" + rx + "vw; top:" + ry + "vh; background-color:" + color +"; '></div" );
}

  //mouse interaction
  
  $('.element').mouseover(function(){
    $(this).css('background-color','black');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','yellow');
  });

});