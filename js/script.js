$(document).ready(function() {

  console.log("ready");


  $(".nav").click(function(){
    $(this).find('.menu').toggle();
  });


$('.menu').on({
       click: function () { $('.menu').hide(); }
    }, 'a');

});

  var allSlideshows = $('.fotorama');

  var fotoramaSwitch = function(thisLink) {

    var thisFilter = $(thisLink).attr('href').replace('#', '').replace('-', '.');

    var targetSlideshow = $('.fotorama.'+thisFilter);

    $(allSlideshows).hide();
    $(targetSlideshow).show();

    $('.menu').hide();

    // console.log("targetSlideshow: ", targetSlideshow);
  };




  $(".nav .menu").find('a').click(function(e){
    e.preventDefault();

    // this is the a element we clicked on
    var thisLink = $(this);

    fotoramaSwitch(thisLink);

    return false;
  });



