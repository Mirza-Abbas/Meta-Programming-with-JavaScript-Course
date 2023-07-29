let jsonStr = '{"greeting": "Hello"}';

let obj = JSON.parse(jsonStr);

console.log(obj.greeting);

obj.greeting = 'Hi';

let data = {
    name : 'John'
}

console.log(JSON.stringify(data));