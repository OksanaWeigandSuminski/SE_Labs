
const veggies = [
  {item: 'Potato', type: 'Russet', location: 'Idaho', price: 3.75, photo: 'images/potato.jpg'},
  {item: 'Carrot', type: 'Danvers', location: 'Massachusetts', price: 2.50, photo: 'images/carrots.jpg'},
  {item: 'Onion', type: 'Red Onion', location: 'California', price: 3.15, photo: 'images/onions.jpg'},
  {item: 'Broccoli', type: 'Belstar', location: 'California', price: 5.50, photo: 'images/broccoli.jpg'},
  {item: 'Tomato', type: 'Cocktail Tomatoes', location: 'Maine', price: 2.45, photo: 'images/tomato.jpg'},
  {item:'Beetroot', type: 'Garden Beets', location: 'Oregon', price: 2.75, photo: 'images/beet.jpg'}
];
var quantity = [];
let html = ``;
for (let i=0; i< veggies.length; i++){
  let veg = veggies[i];
  html += `
    <img src= ${veg.photo} alt="${veg.location}">
    <h2>${veg.item}</h2>
    <h3>${veg.type} | ${veg.location}</h3>
    <p>Price: ${veg.price}</p>
    <form>
  	<label for="qty">Quantity [kg]</label>
  	<input type="text" name="qty" id="qty"/>
    <p id="receipt"><input type="button" onclick="myFunction()" value="Check Out"/></p>
    </form>
`;
//document.getElementById("item").innerHTML = veg.item;
function myFunction() {
var qty = document.getElementById("qty").value;
//document.getElementById("receipt").innerHTML = qty;
var total = "Total price: " +  qty * veg.price;
document.getElementById("total").innerHTML = total;
//console.log('qty');
quantity.push(qty);
document.getElementById("array").innerHTML = "Total array: " + quantity;
};
}

console.log(html);
document.querySelector('main').insertAdjacentHTML('beforeend', html);
