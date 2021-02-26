//Ninja
var user = prompt("Hello there... Who are you?");
var c = confirm("Do you want to play Ninja?");
if (c){
  var ninja = {
    beltColor: prompt("What belt level is your ninja?"),
    ninjaName: prompt("What is the ninja's name?"),
    powers: prompt("Tell me 3 of his super powers! Seperate each power with a coma").split(",")
  };
  //alert("well " + user + " " + ninja.ninjaName + " with " + ninja.beltColor + " belt, has the power of: " + ninja.powers[0] + " the power of: " + ninja.powers[1] + " the power of: " + ninja.powers[2] + " let's play");
  document.getElementById("message").innerHTML = user + ", " + "meet " + ninja.ninjaName + " with " + ninja.beltColor + " belt. He has the power of " + ninja.powers[0] + ", the power of " + ninja.powers[1] + ", and the power of " + ninja.powers[2] + ". Let's play!"
}
//document.getElementById("message").innerHTML = `GoodBye, ${user}!!!`;

function changeImage(element) {
document.getElementById('imageReplace').src = element;
}
function changeImage2(element) {
document.getElementById('imageReplace2').src = element;
}
function changeImage3(element) {
document.getElementById('imageReplace3').src = element;
}
function changeImage4(element) {
document.getElementById('imageReplace4').src = element;
}
function changeImage5(element) {
document.getElementById('imageReplace5').src = element;
}
