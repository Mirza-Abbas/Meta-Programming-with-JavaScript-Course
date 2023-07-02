var global = "This is a global variable";

function scope(){
    var local = "This is a local variable";

    console.log("Inside Function: ");

    console.log(global);
    
    console.log(local);
}

scope();

console.log("Outside Function:");

console.log(global);

//The following command will not work because local variables can't be accessed at global level i.e Outside function
//console.log(local);