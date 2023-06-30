function consoleLog(val){
    console.log(val);
    return val;
}

function doubleIt(val){
    return val * 2;
}

function objectMaker(val){
    return{
        prop: val
    }
}

consoleLog(objectMaker(doubleIt(100)));