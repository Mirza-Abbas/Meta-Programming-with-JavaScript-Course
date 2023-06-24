try{
    throw new ReferenceError();
}catch(Ref_Err){
    console.log("An Error Occurred");
    console.log("Error Details: ");
    console.log(Ref_Err);
}

console.log("My Program is still running");