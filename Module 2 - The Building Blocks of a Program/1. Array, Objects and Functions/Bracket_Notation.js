var house = {};

house["color"] = "white";
house.priceUSD = 12345;

house["number of rooms"] = 4;

console.log(house.color);
console.log(house["priceUSD"]);

var arr = ["number of rooms", "color", "priceUSD"];
console.log("Using Loop: ");
for (var i = 0; i < arr.length; i++) {
    console.log(house[arr[i]]);
}