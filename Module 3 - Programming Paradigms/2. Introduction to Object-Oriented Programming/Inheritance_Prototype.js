var bird = {
   
    Wings: true,
    Fly: true,
    Feathers: true
}

var eagle1 = Object.create(bird);

console.log("eagle1:", eagle1);
console.log("Can Fly:", eagle1.Fly);

var penguin1 = Object.create(bird);

penguin1.Fly = false;

console.log("penguin1:", penguin1);
console.log("Can Fly:", penguin1.Fly);