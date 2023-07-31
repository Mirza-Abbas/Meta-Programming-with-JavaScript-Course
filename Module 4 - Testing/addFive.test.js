const addFive = require('./addFive.js');

test('addFive', function() {
    expect(addFive(1)).toBe(6);
})

//run 'npm run test' command in terminal