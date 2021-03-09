$(document).ready(function(){
$(".kilo").click(function(){
  $("p").slideToggle();
  });
    $(".kilo").click(function(){
      $("#p2").fadeOut();
  });
  //disapear everything from the page
  $(".btn").click(function(){
    $("body").hide();
    $("body").replaceWith("<p id='repl'>Ohh no you deleted everything!!!</p>");
  });
    //WITH ANIMATION
  // // when hover over .btn button, body gets hidden
  // $(".btn").click(function(){
  //   // hide(speed, callback function)
  //   $("body").hide(1000,function(){
  //     // replaces body with paragraph after hiding body
  //     $("body").replaceWith("<p>Ohh no you deleted everything!!!</p>");
  //   });
  // });
});
