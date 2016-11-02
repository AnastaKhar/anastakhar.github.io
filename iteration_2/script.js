$(document).ready(function() { //always do this first. A special event 
  //append new element 100 times
  
    

 
 

  for (i = 0; i < 10; i++){
  $("body").append( "<div class='element' style='background-color: hsl(" + i * 100 + ", 100%, 50%);'></div>" );
}


  $('.element').mouseover(function(){
    $(this).hide();
  });

  for (i = 0; i < 2; i++){
  $("body").append( "<div class='circle' style='width: " + i * 60 +"px; height: "+ i * 30 +"px; background-color: white');'></div>" );
}

  $('.things').mouseover(function(){
    $(this).css('color','yellow');
  });


for (i = 0; i < 5; i++){
  $("body").append( "<div class='smallrect' style='background-color: hsl(" + i * 100 + ", 100%, 50%);'></div>" );
}


$(".btn1").click(function(){
        $(".square").animate({height: "300px"});
    });

$(".btn2").click(function(){
        $(".square").animate({height: "100px"});
    });




for (i = 0; i < 6; i++) { 
  $("body").append( "<div class='rotate' style='transform: rotate(" + i*60 + "deg);'></div>" );
  console.log("rotate " + i + " added");
}



});