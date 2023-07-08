var purchase1 = {
    
    shoes : 100,
    tax : 1.2,
    
    totalPrice : function() {

        var calculation = purchase1.shoes * purchase1.tax;
        console.log("Total Price: " + calculation);
    }
}

purchase1.totalPrice();

var purchase2 = {
    
    shoes : 50,
    tax : 1.2,
    
    totalPrice : function() {

        //Using 'this' keyword
        var calculation = this.shoes * this.tax;
        console.log("Total Price: " + calculation);
    }
}

purchase2.totalPrice();