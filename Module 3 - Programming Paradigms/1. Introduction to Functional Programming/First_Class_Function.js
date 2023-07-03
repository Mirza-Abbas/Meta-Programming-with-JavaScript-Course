function addTwoNums(a, b) {
    console.log(a + b);
}

function randomNum() {
    return Math.floor( (Math.random() * 10) + 1);
}

function specificNum(){
    return 42;
}

var useRandom = true;

var getNum;

if(useRandom){
    getNum = randomNum;
}
else {
    getNum = specificNum;
}

addTwoNums(getNum(), getNum());