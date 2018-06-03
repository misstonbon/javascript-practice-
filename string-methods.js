kanyeOne = "I am a God So hurry up with my damn massage In a French-ass restaurant Hurry up with my damn croissants"
kanyeTwo = "What if Kanye made a song about Kanye / Called 'I miss the old Kanye' / Man that would be so Kanye, that's all it was Kanye / We still love Kanye and I love you like Kanye loves Kanye"


// charAt()
// returns char at index specified 

console.log(kanyeOne.charAt(2))

// charCodeAt()
// returns unicode for char at index 

console.log(kanyeOne.charCodeAt(2))

// concat()
// concatenates things 

console.log(kanyeOne.concat(kanyeTwo))

// endsWith()
// check if string end with a specified string or chars 

console.log(kanyeOne.endsWith("to"))

// fromCharCode()
// returns a char from unicode 
console.log(String.fromCharCode(114))


// includes()
// if contains specified chars 
console.log(kanyeTwo.includes("kanye"))


// indexOf()
// index of first found occurence 

console.log(kanyeTwo.indexOf("kanye"))

// lastIndexOf()
// index of last found occurence 

console.log(kanyeTwo.lastIndexOf("kanye"))

// match()
// matching regex 
console.log(kanyeTwo.match(/kanye/g))

// repeat()
// string returning specified num of times 
console.log(kanyeOne.repeat(3))


// replace()
// searches regex string and replaces with specified second param 

console.log(kanyeTwo.replace(/kanye/g, "KANYE"))

// search()
// search for specified val, return position 

console.log(kanyeTwo.search("kanye"))

// slice()
// expract a part of string , return new string 
console.log(kanyeTwo.slice(2, 4))

// split()
// split into array with delimiter specified 

console.log(kanyeOne.split(" "))

// startsWith()
// if string beings with set of chars

console.log(kanyeOne.startsWith("free"))

// substr()
// kind of like slice
// start at 2, count 4 chars 
console.log(kanyeTwo.substr(2, 4))

// substring()
// from one specified index until another , in this case from index two to 4
console.log(kanyeTwo.substring(2, 4))

// toLowerCase()

console.log(kanyeOne.toLowerCase())

// toUpperCase()
console.log(kanyeOne.toUpperCase())

// trim()
// removes leading and trailing white space
var kanyeThree = "     YEEZUS      ";
console.log(kanyeThree.trim())

