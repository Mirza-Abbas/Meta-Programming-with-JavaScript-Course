let color = "red";  //Global Scope Variable

if(color == "red"){

    let color = "blue";     //Block scope variable

    console.log("Inside If: " + color);
}

console.log("Outside If: " + color);