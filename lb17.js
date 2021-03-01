$( "#btn1" ).click(function() {
  $( "#box" ).animate({
   width: "300px",
   height: "300px",
    }, 1500 );
});

$( "#btn2" ).click(function() {
  $( "#box" ).animate({
   width: "100px",
   height: "100px",
   opacity: 1,
   "border-radius": 0,
   right: "0",
    }, 500 );
    $("#box").css({ backgroundColor: 'darkGreen' });
    $("body").css({ backgroundColor: 'white'});
});
$( "#btn3" ).click(function() {
  $("#box").animate({
    right: "-=100px",
  }, 1000 );
});
$("#btn4").click(function () {
  $("#box").animate({
    "border-radius": "50%"
  }, 500);
});
$("#btn5").click(function () {
  $("#box").animate({
    opacity: 1/2
  }, 500);
});
$("#btn6").click(function () {
  $("#box").css({ backgroundColor: 'red', 'opacity':'1' });
  $("body").css({ backgroundColor: 'black'});
});
