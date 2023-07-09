class Bird {

    useWings() {

        console.log("Flying!")
    }
}

class Eagle extends Bird {

    useWings() {

        super.useWings()
        console.log("Barely flapping!")
    }
}

class Penguin extends Bird {

    useWings() {

        console.log("Diving!")
    }
}

var MyEagle = new Eagle();
var MyPenguin = new Penguin();

MyEagle.useWings(); 
MyPenguin.useWings(); 