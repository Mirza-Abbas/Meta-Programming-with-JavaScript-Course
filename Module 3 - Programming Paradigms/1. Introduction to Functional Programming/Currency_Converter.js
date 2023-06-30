// Functional Programming Example: (Currency Converter)

var currencyOne = 100;

var currencyTwo = 0;

var rate = 1.2;

function convertCurrency(amount, rate){
    
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, rate);

console.log(currencyTwo);