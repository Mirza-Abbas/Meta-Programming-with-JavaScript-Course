let top7 = ['USA','UK','China','Japan','Ireland','Iceland','Africa'];

let[firstVisit, secondVisit, ...nextTime] = top7;

console.log(firstVisit);
console.log(secondVisit);
console.log(...nextTime);

function addTax(tax, ...Itemprice){
    return Itemprice.map( function (price) {
        return tax * price;
    });
}

console.log(addTax(1.1, 46, 89, 35));