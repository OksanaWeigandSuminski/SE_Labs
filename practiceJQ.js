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
//to get url of file type, in chrome and other webkit browsers
var _URL = window.URL || window.webkitURL;

$("#subbut").click(function () {
    var file;
    var image;
    if ((file = $("#upload-image")[0].files[0])) {
        image = new Image();
        image.onload = function () {
            $("#ninja").hide();
            $("#oldImg").hide();
            $("#image-wrapper").append(this);
            $(this).attr("id", "image");
        }
        //static method creates a DOMString containing a URL representing the object given in the parameter
        image.src = _URL.createObjectURL(file);
    }
});
