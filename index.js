var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObject = {}
  newObject["itemName"] = item; 
  newObject["itemPrice"] = Math.floor(Math.random() * 100);
  cart.push(newObject); 
  return `${item} has been added to your cart.`; 
}

function viewCart() {
  var current = '';
  if (cart.length === 0) {
   return "Your shopping cart is empty." 
  } else {
   for (var i = 0; i < cart.length; i++){
     if (i === cart.length - 1) {
       current = current + `${cart[i].itemName} at $${cart[i].itemPrice}.`; 
     } else if (i === 0) {
       current = current + `${cart[i].itemName} at $${cart[i].itemPrice}, and `; 
     } else {
       current = current + `${cart[i].itemName} at $${cart[i].itemPrice}, `; 
     }
     }
   } return "In your cart, you have " + current; 
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
