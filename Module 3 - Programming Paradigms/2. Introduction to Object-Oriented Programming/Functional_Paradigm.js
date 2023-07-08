var shoes = 100;
var tax = 1.2;
    
function totalPrice() {

    return shoes * tax;
}

var toPay = totalPrice(shoes, tax);

console.log(toPay);