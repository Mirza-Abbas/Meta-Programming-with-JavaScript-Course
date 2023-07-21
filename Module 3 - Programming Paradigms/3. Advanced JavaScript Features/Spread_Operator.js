let top3 = ["USA", "UK", "China", "Japan", "Ireland"] 

function visit (place1, place2, place3) {
    
    console.log("Visit", place1);
    console.log("Then visit", place2);
    console.log("Finally, visit", place3);
}

visit(...top3);