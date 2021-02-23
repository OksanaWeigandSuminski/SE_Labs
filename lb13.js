// var birthday = prompt("Enter your birthday: ");
// var future = prompt("Enter future year: ");
// var myAge  = future - birthday;
//document.getElementById("year").innerHTML = `You will be either ${myAge} or ${myAge - 1} in the year of ${future}`;

var age = prompt("Enter your current age: ");
var maxAge = prompt("Enter your max age: ");
var snacks = prompt("Enter snacks per day: ");
var total = (snacks * 365) * (maxAge - age);
document.getElementById("snacks").innerHTML = `You will need ${total} chocolate bars to last you until the ripe old age of ${maxAge}`

var arr = [];
arr.push(prompt("Enter your birth year: "));
arr.push(prompt("Enter future year: "));
arr.push(arr[1] - arr[0]);
document.getElementById("year").innerHTML = `You will be either ${arr[2]} or ${arr[2]+1} in the year of ${arr[1]}`;
