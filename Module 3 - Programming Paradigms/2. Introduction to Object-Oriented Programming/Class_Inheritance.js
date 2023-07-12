class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var train1 = new Train('red', false);

console.log("Train 1:",train1);

train1.toggleLights(); 
train1.lightsStatus(); 
train1.getSelf(); 
train1.getPrototype(); 

var train2 = new Train('blue', false);
var train3 = new Train('blue', false);

var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

console.log("High Speed Train 1:", highSpeed1);
highSpeed1.toggleHighSpeed();
highSpeed1.toggleLights(); 
highSpeed1.lightsStatus(); 
highSpeed1.getSelf(); 
highSpeed1.getPrototype();