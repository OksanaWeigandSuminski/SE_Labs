
const veggies = [
  {item: 'Potato', type: 'Russet', location: 'Idaho', price: 3.75, qty: "<input id='potatoUser' type='text' />", photo: 'images/potato.jpg'},
  {item: 'Carrot', type: 'Danvers', location: 'Massachusetts', price: 2.50, qty: "<input id='carrotUser' type='text' />", photo: 'images/carrots.jpg'},
  {item: 'Onion', type: 'Red Onion', location: 'California', price: 3.15, qty: "<input id='onionUser' type='text' />", photo: 'images/onions.jpg'},
  {item: 'Broccoli', type: 'Belstar', location: 'California', price: 5.50, qty: "<input id='broccoliUser' type='text' />", photo: 'images/broccoli.jpg'},
  {item: 'Tomato', type: 'Cocktail Tomatoes', location: 'Maine', price: 2.45, qty: "<input id='tomatoUser' type='text' />", photo: 'images/tomato.jpg'},
  {item:'Beetroot', type: 'Garden Beets', location: 'Oregon', price: 2.75, qty: "<input id='beetrootUser' type='text' />", photo: 'images/beet.jpg'}
];
var items = {
  potato: 3.75,
  carrot: 2.50,
  onion: 3.15,
  broccoli: 5.50,
  tomato: 2.45,
  beetroot: 2.75
};

let html = ``;
for (let i=0; i< veggies.length; i++){
  let veg = veggies[i];
  html += `
  <div class="container">
    <img src= ${veg.photo} alt="${veg.item}">
    </div>
    <div>
    <h2>${veg.item}</h2>
    <h3>${veg.type} | ${veg.location}</h3>
    <p>Price: ${veg.price}</p>
    <p>Qty [kg]: ${veg.qty}</p>
  </div>
`;
}

function getValue(){
   var userInput = document.getElementById('potatoUser').value;
   var potato = Number(userInput) * `${items.potato}`;
   document.getElementById("quantityPotato").innerHTML = "Potato: " + "$" + potato;
   var userInput = document.getElementById('carrotUser').value;
   var carrot = Number(userInput) * `${items.carrot}`;
   document.getElementById("quantityCarrot").innerHTML = "Carrot: " + "$" + carrot;
   var userInput = document.getElementById('onionUser').value;
   var onion = Number(userInput) * `${items.onion}`;
   document.getElementById("quantityOnion").innerHTML = "Onion: " + "$" + onion;
   var userInput = document.getElementById('broccoliUser').value;
   var broccoli = Number(userInput) * `${items.broccoli}`;
   document.getElementById("quantityBroccoli").innerHTML = "Broccoli: " + "$" + broccoli;
   var userInput = document.getElementById('tomatoUser').value;
   var tomato = Number(userInput) * `${items.tomato}`;
   document.getElementById("quantityTomato").innerHTML = "Tomato: " + "$" + tomato;
   var userInput = document.getElementById('beetrootUser').value;
   var beetroot = Number(userInput) * `${items.beetroot}`;
   document.getElementById("quantityBeetroot").innerHTML = "Beetroot: " + "$" + beetroot;
   var total = `${potato + carrot + onion + broccoli + tomato + beetroot}`;
   document.getElementById("total").innerHTML = "<strong>Total:</strong> " + total;
}

console.log(html);
document.querySelector('main').insertAdjacentHTML('beforeend', html);
