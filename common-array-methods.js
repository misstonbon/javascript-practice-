var kanye = ["k", "a", "n", "y", "e"];

kanye.push("!") // adds to array

console.log(kanye);

kanye.pop() // removes and returns last element

console.log(kanye);

kanye.join("!")
console.log(kanye.join());

console.log(kanye);
// string without modifying array

console.log(kanye.reverse()); // reverses and modifies array 
console.log(kanye);

console.log(kanye.shift()); // removes 1st el and returns it 

console.log(kanye.unshift("K")); // adds to beginning and returns length of new array 

console.log(kanye.slice(1,2));  // returns element at index, does not alter array 

console.log(kanye.sort()); // sorts array , changes it 

console.log(kanye.splice(2,2, "kanye")); 
// first param is start to remove, 
// second param delete count ,
// third is what to add. 

console.log(kanye);







