var Car = {
    speed : 200,
    color : 'red'
}

for (let key of Object.keys(Car) ) {
    console.log( key, ":", Car[key] );
}