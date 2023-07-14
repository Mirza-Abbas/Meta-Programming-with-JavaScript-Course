let {PI} = Math;

console.log(PI);

console.log(PI === Math.PI);

PI = 1;     //changing destructured variables don't affect the source property on the object

console.log(PI == Math.PI);