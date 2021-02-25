
const veggies = [
  {item: 'Potato', type: 'Russet', location: 'Idaho', price: 3.75, qty: 2, photo: 'images/potato.jpg'},
  {item: 'Carrot', type: 'Danvers', location: 'Massachusetts', price: 2.50, qty: 3, photo: 'images/carrots.jpg'},
  {item: 'Onion', type: 'Red Onion', location: 'California', price: 3.15, qty: 4, photo: 'images/onions.jpg'},
  {item: 'Broccoli', type: 'Belstar', location: 'California', price: 5.50, qty: 5, photo: 'images/broccoli.jpg'},
  {item: 'Tomato', type: 'Cocktail Tomatoes', location: 'Maine', price: 2.45, qty: 6, photo: 'images/tomato.jpg'},
  {item:'Beetroot', type: 'Garden Beets', location: 'Oregon', price: 2.75, qty: 7, photo: 'images/beet.jpg'}
];
var items = {
  potato: 3.75,
  carrot: 2.50,
  onion: 3.15,
  broccoli: 5.50,
  tomato: 2.45,
  beetroot: 2.75
};
var cart = {
  potato: 0,
  carrot: 0,
  onion: 0,
  broccoli: 0,
  tomato: 0,
  beetroot: 0
};
let html = ``;
for (let i=0; i< veggies.length; i++){
  let veg = veggies[i];
  html += `
    <img src= ${veg.photo} alt="${veg.location}">
    <h2>${veg.item}</h2>
    <h3>${veg.type} | ${veg.location}</h3>
    <p>Price: ${veg.price}</p>
    <button onclick="addItems()">Add Item</button><br><br>
`;
}
// add items to cart
function addItems(){
  var add = prompt("What item would you like to add? (Potato/Carrot/Onion/Broccoli/Tomato/Beetroot)");
  var qty = prompt("Qty:");
  if(add.toLowerCase() == "potato"){
    cart.potato += Number(qty);
    alert("You have added " + qty + " " + add.toLowerCase() + " to your cart.");
  }
  else if(add.toLowerCase() == "carrot"){
    cart.carrot += Number(qty);
    alert("You have added " + qty + " " + add.toLowerCase() + " to your cart.");
  }
  else if(add.toLowerCase() == "onion"){
    cart.onion += Number(qty);
    alert("You have added " + qty + " " + add.toLowerCase() + " to your cart.");
  }
  else if(add.toLowerCase() == "broccoli"){
    cart.broccoli += Number(qty);
    alert("You have added " + qty + " " + add.toLowerCase() + " to your cart.");
  }
  else if(add.toLowerCase() == "tomato"){
    cart.tomato += Number(qty);
    alert("You have added " + qty + " " + add.toLowerCase() + " to your cart.");
  }
  else if(add.toLowerCase() == "beetroot"){
    cart.beetroot += Number(qty);
    alert("You have added " + qty + " " + add.toLowerCase() + " to your cart.");
  }
  else{
    alert("The item you entered does not exist in the available items. Please try again");
  }
}
function myFunction() {
  var text = "";
  var total = 0;
  for (property in cart){
    item = `${property}`;
    qty = `${cart[property]}`;
    subtotal = (`${cart[property]}` * `${items[property]}`);
    total += subtotal;
    text += "Item: " + item + "  Qty: " + qty + "  Subtotal: $"  + subtotal;
    text += '<br>'
  }
  text += "Total: $" + total;
  document.getElementById("receipt").innerHTML += text;
};
console.log(html);
document.querySelector('main').insertAdjacentHTML('beforeend', html);
