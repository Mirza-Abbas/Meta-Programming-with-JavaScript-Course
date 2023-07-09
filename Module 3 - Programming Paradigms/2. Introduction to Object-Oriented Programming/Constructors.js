function Icecream(flavor) {

    this.flavor = flavor;

    this.meltIt = function() {

        console.log(this.flavor, "icecream has melted");
    }
}

let appleIcecream = new Icecream("apple");

console.log(appleIcecream);
console.log(appleIcecream.flavor);

var fruit1 = "Pear";
var fruit2 = new String("Pear");
var fruit3 = new String("Pear");

console.log(fruit1 == fruit2);
console.log(fruit3 == fruit2);