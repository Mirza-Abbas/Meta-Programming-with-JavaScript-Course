var nums = [0, 10, 20, 30, 40];

function filterArr(num) {

    return num > 10;
}

console.log( 
    nums.filter( filterArr ) 
);

nums.filter( 
    
    function(num) {
    
        return num > 20;
    }
)