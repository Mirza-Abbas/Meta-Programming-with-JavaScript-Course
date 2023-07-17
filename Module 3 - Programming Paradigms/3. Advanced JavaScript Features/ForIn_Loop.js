var Car = {
    
    color : 'red'
}

var sportsCar = Object.create(Car);

sportsCar.speed = 120;

console.log("Sports Car Object:", sportsCar);

for (let props in sportsCar) {
    console.log("For In Loop:", props);
}

for (let props of Object.keys(sportsCar)) {
    console.log("For Of Loop:", props, ":", sportsCar[props]);
}