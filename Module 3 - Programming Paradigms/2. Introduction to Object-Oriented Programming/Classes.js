class Car {
    
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn(){
        console.log("Turbo is On!");
    }
}

var car1 = new Car("red", 120);

car1.turboOn();

console.log(car1.color);