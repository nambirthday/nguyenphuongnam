const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
  
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})
const loginForm = document.getElementById('login-form');
const logoutForm = document.getElementById('logout-form');
const logoutButton = document.getElementById('logout-button');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === '123456') {
    loginForm.style.display = 'none';
    logoutForm.style.display = 'block';
  } else {
    alert('Tên đăng nhập hoặc mật khẩu không chính xác!');
  }
});

logoutButton.addEventListener('click', function() {
  loginForm.style.display = 'block';
  logoutForm.style.display = 'none';
});


function addToCart(itemName, price) {
    var cartItems = document.getElementById("cart-items");
    var item = document.createElement("li");
    item.innerText = itemName + " - $" + price;
    cartItems.appendChild(item);
    updateCartTotal(price);
}


function updateCartTotal(price) {
    var cartTotal = document.getElementById("cart-total");
    var total = parseFloat(cartTotal.innerText);
    total += price;
    cartTotal.innerText = total.toFixed(2); 
}


function removeFromCart(item) {
    var cartItems = document.getElementById("cart-items");
    var price = parseFloat(item.innerText.split(" - $")[1]);
    cartItems.removeChild(item);
    updateCartTotal(-price); 
}


function them(button) {
    var row = button.parentNode.parentNode;
    var itemName = row.cells[0].innerText;
    var price = parseFloat(row.cells[1].innerText.slice(1)); 
    addToCart(itemName, price);
}


function checkout() {
    var cartTotal = document.getElementById("cart-total").innerText;
    alert("Total amount to be paid: $" + cartTotal);
    
}
