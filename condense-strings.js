// kanyefied, of course

let kanye = "kanye yeezus" ;

let  someString = "live verses estan annoying" ;

let nonCondensible = "hello world!"

function condenseWords(left, right) {  //left string and right string 
    for (let i = 0 ; i < left.length; i++) {  
        let leftSubstring = left.substring(i);  // returns substring from start index to end index or from start all the way to end if end not specified 
        if (right.startsWith(leftSubstring)) { // if string begins with set of chars , returns boolean 
            return left + right.replace(leftSubstring, ''); // replaces first param with second
        }
    } 
   return null; 
}

function condenseSentence(string) {
    const words = string.split(" "); // splits into array 
    for (let i = 0 ; i < words.length -1 ; i++) { // -1 beause we don't want i+1 to go oob
        const condensed = condenseWords(words[i], words[i+1]);

        if (condensed) {
            words[i] = condensed;
            words.splice(i+1, 1); // first param is the element in the erray from which to start removing elements,
                                  // second element is the number of elements to remove 
                                  // if given 3rd param, this is the param that is added in place of removed elements
            i--; 
        }
    }
    return words.join(" ");
}

console.log(condenseSentence(kanye));
console.log(condenseSentence(someString));
console.log(condenseSentence(nonCondensible));