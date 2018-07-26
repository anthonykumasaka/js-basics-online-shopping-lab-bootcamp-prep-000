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
  var current = 'In your cart, you have ';
  if (cart.length === 0) {
   return "Your shopping cart is empty." 
  } 
  if (cart.length >= 1) {
    current = current + `${cart[0].itemName} at $${cart[0].itemPrice}`
  } 
  if (cart.length >= 2) {
    for (var i = 0; i < cart.length - 1; i++) {
    current = current + `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
    } 
    current = current + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
  }
  
   for (var i = 0; i < cart.length; i++){
     if (i === cart.length - 1 && cart.length === 1) {
       current = current + `${cart[i].itemName} at $${cart[i].itemPrice}.`;
     } else if (i === cart.length - 1 && cart.length > 1) {
       current = current + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
     } else {
       current = current + `${cart[i].itemName} at $${cart[i].itemPrice}, `; 
     }
     }
   } return current; 
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
