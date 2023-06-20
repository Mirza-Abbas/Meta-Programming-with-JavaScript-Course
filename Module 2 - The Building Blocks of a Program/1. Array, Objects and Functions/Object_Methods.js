var car = {};

car.mileage = 12345;

car.color = "white";

car.start = function() {
    console.log("The Engine is running");
}

car.lightsOn = function() {
    console.log("The Lights are on.");
}

console.log(car);

car.start();

car.lightsOn();