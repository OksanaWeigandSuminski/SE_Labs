//create a function for button
function style1(){
  document.getElementById("four").innerHTML = '<link rel="stylesheet" href="style1.css">';
}
function style2(){
  document.getElementById("four").innerHTML = '<link rel="stylesheet" href="style2.css">';
}
function style3(){
  document.getElementById("four").innerHTML = '<link rel="stylesheet" href="style3.css">';
}
function style4(){
  document.getElementById("four").innerHTML = '<link rel="stylesheet" href="style4.css">';
}
function myFunction() {
var numKids = document.getElementById("numKids").value;
var partner = document.getElementById("partner").value;
var location = document.getElementById("location").value;
var jobTitle = document.getElementById("jobTitle").value;
document.getElementById("code").innerHTML = "You will be a " + document.getElementById("jobTitle").value + " in " + document.getElementById("location").value + ", and married to " + document.getElementById("partner").value + " " + "with " + document.getElementById("numKids").value + " kids.";
}

c = confirm("Do you want to continue?")
if(c){
// take input from the user
var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");
var c = prompt("Enter the third number: ");

// calculate formula
var root1 = (-b + Math.sqrt(b**2 - 4*a*c))/(2*a);
var root2 = (-b - Math.sqrt(b**2 - 4*a*c))/(2*a);
console.log(`The roots of quadratic formula are ${root1} and ${root2}`);

var p = 3.1415926535898
var r = prompt("Enter the radius: ");
var h = prompt("Enter the height: ");
var volume = p*r**2*h;
console.log(`The volume of the cylinder is ${volume}`);
document.getElementById("formula").innerHTML = `The roots of quadratic formula are ${root1} and ${root2}` + "<br/> " + ` The volume of the cylinder is ${volume}`
}
else{
	document.getElementById("formula").innerHTML = ("Go find a calculator")
}
