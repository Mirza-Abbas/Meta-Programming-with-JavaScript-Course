function addTwoNums(getNum1, getNum2) { //accepts functions as arguments
    console.log(getNum1() + getNum2());
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

addTwoNums(getNum, getNum);