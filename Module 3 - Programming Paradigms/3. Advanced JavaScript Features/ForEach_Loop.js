const fruits = ['kiwi','mango','apple','pear'];

function appendIndex(fruit, index) {

    console.log(`${index}. ${fruit}`)
}

fruits.forEach(appendIndex);

let cat = {
    
    sound: 'Meow',
    color: 'golden'
}

var Catkeys = Object.keys(cat);

var MyCat = [];

Catkeys.forEach( function( Catkeys ) {
    
    MyCat.push( Catkeys, cat[ Catkeys ] );
});

console.log(MyCat)