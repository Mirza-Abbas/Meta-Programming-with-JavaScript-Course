let flying = {

    wings: 2
}

let car = {

    wheels: 4
}

let flyingCar = {

    ...flying, 
    ...car
}

console.log(flyingCar) // {wings: 2, wheels: 4}