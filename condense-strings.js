// kanyefied, of course

let kanye = "kanye yeezus" ;

let  someString = "live verses are cool" ;

function condenseWords(left, right) {
    for (let i = 0 ; i < left.length; i++) {
        let leftSubstring = left.substring(i);
        if (right.startsWith(leftSubstring)) {
            return left + right.replace(leftSubstring, '');
        }
    }
   return null; 
}

function condenseSentence(string) {
    const words = string.split(" ");
    for (let i = 0 ; i < words.length -1 ; i++) {
        const condensed = condenseWords(words[i], words[i+1]);

        if (condensed) {
            words[i] = condensed;
            words.splice(i+1, 1);
            i--;
        }
    }
    return words.join(" ");
}

console.log(condenseSentence(kanye));
console.log(condenseSentence(someString));