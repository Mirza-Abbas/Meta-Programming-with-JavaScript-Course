function displayArray(ary){
    for(var i=0; i<ary.length; i++){
        console.log(i+1 + ". " + ary[i]);
    }
}

var colors = ["Red", "Green", "Blue"];
displayArray(colors);