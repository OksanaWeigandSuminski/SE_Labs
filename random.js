//grocery shopping list

var row = 5;
console.log(row,1);
var buy = document.getElementById("buy");
console.log(buy,2);



function totalPrice(){
  var itemList = ["Apple","Banana","Blueberries"];
  var priceList = [5.48,0.2,2.5];
  var qtyList = [null,null,null];

  var qtyApple = document.getElementById('apple').value;

  var qtyBanana = document.getElementById('banana').value;

  var qtyB = document.getElementById('blueberries').value;

  var userEnter = [qtyApple,qtyBanana,qtyB];

  console.log(userEnter,4);

  var finalPrice = [null,null,null];

  console.log(finalPrice,5);

  var display = document.getElementById("display");

   for(var i = 0; i < 3; i++){
    if(userEnter[i] != 0){
      qtyList[i] = userEnter[i];
      finalPrice[i] = qtyList[i] * priceList[i];
      console.log(qtyList[i],6);
      console.log(finalPrice,7);
    }
  }

  for(var i =0 ; i <3; i++  ){

  var newrow = display.insertRow(row++);

  var cell1 = newrow.insertCell(0);
  var cell2 = newrow.insertCell(1);
  var cell3 = newrow.insertCell(2);
  var cell4 = newrow.insertCell(3);


   cell1.innerHTML = itemList[i];
   cell2.innerHTML = qtyList[i];
   cell3.innerHTML = priceList[i];
   cell4.innerHTML = finalPrice[i];
   }
}


//Ninja
var user = prompt("Hello there... Who are you?");
var c = confirm("Do you want to play Ninjas");
if (c){
  var ninja = {
    beltColor: prompt("What level belt it's your ninja?:"),
    ninjaName: prompt("What is the ninjas name?:"),
    powers: prompt("tell me 3 super powers: you seperate each power with a coma").split(",")
  };
  alert("well " + user + " " + ninja.ninjaName + " with " + ninja.beltColor + " belt, has the power of: " + ninja.powers[0] + " the power of: " + ninja.powers[1] + " the power of: " + ninja.powers[2] + " let's play");
}
console.log("GoodBye!!!");

//practice array in the object
var lizzieTheCat = {
age: 18,
furColor: "grey",
meow: function(){
    console.log("meowww");
},
eat: function(food){
console.log("Yum, I love " + food);
},
sleep: function(numMinutes){
for(var i = 0; i < numMinutes; i++){
console.log("z");
}
}
};
lizzieTheCat.meow();
lizzieTheCat.eat('brown mushy stuff');
lizzieTheCat.sleep(10);
