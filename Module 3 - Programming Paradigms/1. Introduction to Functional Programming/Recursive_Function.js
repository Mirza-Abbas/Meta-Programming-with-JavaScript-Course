let counter = 3;

function recurse(){
    
    console.log(counter);

    counter--;

    if(counter == 0){
        return;
    }

    recurse();
}

recurse();